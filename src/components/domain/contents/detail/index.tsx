import { ContentsListType } from "type/contents";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { links } from "constant/index";
import { Button } from "antd";

const DetailContents = () => {
  const { pageId, contentsNumber } = useParams();
  const [data, setData] = useState<ContentsListType | null>(null);
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
          .delete(`http://localhost:3000/${pageId}/${contentsNumber}`)
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
      .get(`http://localhost:3000/${pageId}?id=${contentsNumber}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageId, contentsNumber]);
  if (!data) {
    return <div>Loading...</div>;
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
          <span>{data.title}</span> <span className="time">{data.time}</span>
          <Button className="delBt" onClick={deleteData}>
            게시글 삭제
          </Button>
        </div>
        <div className="writerLine">{data.writer}</div>
        <div className="contentText">{data.textArea}</div>
      </div>
    </>
  );
};

export default DetailContents;
