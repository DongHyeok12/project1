import { ContentsDetailType } from "type/contents";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { links } from "constant/index";
import { Button } from "antd";

const DetailContents = () => {
  const { pageId, contentsNumber } = useParams();
  const [data, setData] = useState<ContentsDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };
  const nav = useNavigate();
  function deleteData() {
    if (data) {
      const inputPw = prompt("비밀번호를 입력하세요");
      const isPass = inputPw === data.pw;
      if (isPass) {
        axios
          .delete(`http://localhost:3308/${pageId}/${contentsNumber}`)
          .then(() => {
            alert("삭제되었습니다!");
            nav(`/${pageId}`);
          })
          .catch((err) => console.log(err));
      } else if (inputPw) {
        alert("비밀번호가 일치하지 않습니다.");
      }
    }
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3308/${pageId}?id=${contentsNumber}`)
      .then((res) => {
        const fetchData: ContentsDetailType = res.data[0];
        axios
          .patch(`http://localhost:3308/${pageId}/${contentsNumber}`, {
            view: +fetchData.view + 1,
          })
          .then((resp) => {
            setData(res.data[0]);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pageId, contentsNumber]);

  if (loading) {
    return <div>로딩 중입니다...</div>;
  }

  if (!data) {
    let timer = 3;
    const time = setInterval(() => {
      timer -= 1;
      if (timer === 0) {
        clearInterval(time);
        nav("/" + pageId);
      }
    }, 1000);

    return (
      <>
        <div>존재하지 않는 게시글 입니다. 3초 후 게시판으로 돌아갑니다.</div>
      </>
    );
  }
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
          <span className="time">{data.time}</span>
          <Button className="delBt" onClick={deleteData}>
            게시글 삭제
          </Button>
          <div className="time">조회수 : {data.view}</div>
        </div>
        <div className="writerLine">{data.writer}</div>
        <div
          dangerouslySetInnerHTML={{ __html: data.textArea }}
          className="contentText"
        />
        <div className="commentArea">댓글</div>
      </div>
    </>
  );
};

export default DetailContents;
