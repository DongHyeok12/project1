import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContentsListType } from "type/contents";
import { getContents } from "api/contents";
import { useRecoilState } from "recoil";
import { contentsLengthState } from "recoil/atoms/ContentsLengthAtom";
import { reverse } from "dns";

const ContentsList = () => {
  const [contentsLength, setContentsLength] =
    useRecoilState(contentsLengthState);
  function getPostData() {
    const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성

    xhr.open("GET", "http://localhost:3000/posts");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send();

    // 서버로 부터 응답 받으면 실행
    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.response);
        setContentsList(res);
        setContentsLength(res.length);
      } else {
        console.log(xhr.status, xhr.statusText);
      }
    };
  }

  const location = useLocation();

  const [page, setPage] = useState<number>(1);
  const [contentsList, setContentsList] = useState<ContentsListType[]>([]);

  useEffect(() => {
    getPostData();
  }, [page]);

  // 컨텐츠를 불러오는 API 호출
  // const getContentsApi = async () => {
  //   try {
  //     // API 호출
  //     const result = await getContents(page);

  //     // 컨텐츠 저장
  //     setContentsList(result.contents);
  //   } catch (error) {
  //     // 실패 했을 경우, error 메시지 표시
  //     console.error(error);
  //     alert(error);
  //   }
  // };

  // useEffect(() => {
  //   getContentsApi(); // 초기 or 페이지 변경 시, API 호출
  // }, [page]);

  return (
    <>
      <table>
        <thead className="ListBox">
          <tr>
            <th className="thNum">번호</th>
            <th className="thTitle">제목</th>
            <th className="thWriter">작성자</th>
          </tr>
        </thead>
        <tbody>
          {contentsList
            .sort(function (a, b) {
              return b.num - a.num;
            })
            .map((v) => (
              <tr key={v.num}>
                <td className="thNum">{v.num}</td>
                <td className="thTitle">
                  <Link to={`${location.pathname}/${v.num}`}>{v.title}</Link>
                </td>
                <td className="thWriter">{v.writer}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
      <button onClick={() => setPage(101)}>101</button>
    </>
  );
};

export default ContentsList;
