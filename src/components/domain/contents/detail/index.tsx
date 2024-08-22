import { ContentsDetailType } from "type/contents";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { links } from "constant/index";
import { Button, Input, Modal } from "antd";
import { decryptPw } from "api/password";
import { deleteContent } from "api/contents/deleteContent";
import { getContent } from "api/contents/getContent";
import { patchContent } from "api/contents/patchContent";
import { isValidComment } from "utill/validation/contents";

const DetailContents = () => {
  const { pageId, contentsNumber } = useParams();
  const [data, setData] = useState<ContentsDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [inputPw, setInputPw] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [cmtWriter, setcmtWriter] = useState("");
  const [cmtPw, setCmtPw] = useState("");
  const { TextArea } = Input;
  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };
  const nav = useNavigate();

  const deleteData = () => {
    if (data) {
      const isPass = decryptPw(data.pw) === inputPw;
      if (inputPw === "") {
        alert("비밀번호를 입력하세요.");
      } else if (isPass) {
        deleteContent(`/${pageId}/${contentsNumber}`);
        alert("삭제되었습니다!");
        nav(`/${pageId}`);
      } else if (inputPw) {
        alert("비밀번호가 일치하지 않습니다.");
        setInputPw("");
        setModalOpen(false);
      }
    }
  };

  const postComment = () => {
    if (isValidComment(cmtWriter, cmtPw, comment)) {
      alert("댓글 달기 성공!");
    } else {
      alert("댓글 달기 실패!");
    }
  };
  useEffect(() => {
    //db에서 해당 데이터 받아오기
    const fecthData = async () => {
      const response = await getContent(`/${pageId}?id=${contentsNumber}`);
      if (response) {
        const res = response[0];
        //조회수 1 추가
        await patchContent(`/${pageId}/${contentsNumber}`, {
          view: +res.view + 1,
        });
        setData(res);
      }
      setLoading(false);
    };
    fecthData();
  }, [pageId, contentsNumber]);

  useEffect(() => {
    setInputPw("");
  }, [modalOpen]);

  if (loading) {
    return <div>로딩 중입니다...</div>;
  }

  if (!data)
    return (
      <>
        {alert("존재하지 않는 게시글 입니다.")}
        {window.location.replace("/" + pageId)}
      </>
    );
  return (
    <>
      <div className="underline">
        <Link className="SubHead_a" to={`${nowPage.path}`}>
          {nowPage.label}
        </Link>{" "}
        <Link className="SubHead_b" to={`${nowPage.path}`}>
          게시판
        </Link>
      </div>

      <div className="contentsDetail">
        <div className="detailLine">
          <span className="detailTitle">{data.title}</span>{" "}
          <span className="time">{data.time}</span>{" "}
          <Button
            className="delBt"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            게시글 삭제
          </Button>
          <Modal
            title={<p>삭제하시겠습니까?</p>}
            open={modalOpen}
            footer={<Button onClick={deleteData}>확인</Button>}
            onCancel={() => setModalOpen(false)}
            maskClosable={false}
          >
            <p>삭제하시려면 비밀번호를 입력한 후 확인 버튼을 눌러주세요.</p>
            <label>비밀번호:&nbsp;&nbsp;&nbsp;</label>
            <Input
              value={inputPw}
              minLength={1}
              maxLength={20}
              onChange={(e) => {
                setInputPw(e.target.value);
              }}
              style={{ width: "200px" }}
            />
          </Modal>
          <Button
            className="delBt"
            onClick={() => {
              nav(`/contents/modify/${pageId}/${contentsNumber}`);
            }}
          >
            게시글 수정
          </Button>
          <div className="time">조회수 : {data.view}</div>
        </div>
        <div className="writerLine">{data.writer}</div>
        <div
          dangerouslySetInnerHTML={{ __html: data.textArea }}
          className="contentText"
        />
        <div className="commentArea">
          <div className="commentTitle">댓글</div>
          <div className="commentRow">안녕하세요</div>
          <div className="commentRow">
            <label className="commentLabel">닉네임 </label>
            <Input
              className="commentInput"
              placeholder="8글자 이하"
              onChange={(e) => {
                setcmtWriter(e.target.value);
              }}
            />{" "}
            <label className="commentLabel">PW </label>
            <Input.Password
              onChange={(e) => {
                setCmtPw(e.target.value);
              }}
              className="commentInput"
              placeholder="4~10글자 사이"
            />
            <TextArea
              className="commentTextArea"
              showCount
              maxLength={300}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              style={{ resize: "none" }}
            />
            <Button onClick={postComment} className="commentButton">
              등록
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailContents;
