import { useLocation } from "react-router-dom";
import "styles/styles.css";
import { useEffect, useState } from "react";
import { ContentsType } from "type/contents";
import { getContents } from "api/contents";

const ContentsList = () => {
  const location = useLocation();

  const [page, setPage] = useState<number>(1);
  const [contentsList, setContentsList] = useState<ContentsType[]>([]);

  // 컨텐츠를 불러오는 API 호출
  const getContentsApi = async () => {
    try {
      // API 호출
      const result = await getContents(page);

      // 컨텐츠 저장
      setContentsList(result.contents);
    } catch (error) {
      // 실패 했을 경우, error 메시지 표시
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    getContentsApi(); // 초기 or 페이지 변경 시, API 호출
  }, [page]);

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
          {contentsList.reverse().map((v) => (
            <tr key={v.num}>
              <td className="thNum">{v.num}</td>
              <td className="thTitle">
                <a href={`${location.pathname}/${v.num}`}>{v.title}</a>
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
