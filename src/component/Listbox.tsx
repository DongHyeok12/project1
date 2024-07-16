import { useLocation } from "react-router-dom";
import "../styles/styles.css";

import { useEffect, useState } from "react";
import { getTmpContents } from "../constant";

export interface ContentsType {
  num: number;
  title: string;
  writer: string;
}

const ListBox = () => {
  const location = useLocation();

  const [page, setPage] = useState<number>(1);
  const [contentsList, setContentsList] = useState<ContentsType[]>([]);

  const getContentsApi = async () => {
    const result = await getTmpContents(page);
    setContentsList(result);
  };

  useEffect(() => {
    getContentsApi();
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
    </>
  );
};

export default ListBox;
