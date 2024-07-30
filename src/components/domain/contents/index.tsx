import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContentsListType } from "type/contents";
import axios from "axios";
import { Pagination } from "antd";
interface whereType {
  where: string;
}

const ContentsList = (props: whereType) => {
  const [page, setPage] = useState<number>(1);
  const [contentsList, setContentsList] = useState<ContentsListType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  function sortData(data: ContentsListType[]) {
    data.sort(function (a: ContentsListType, b: ContentsListType) {
      return b.num - a.num;
    });
  }
  useEffect(() => {
    axios
      .get("http://localhost:3000" + props.where)
      .then((res) => {
        sortData(res.data);
        setTotalItems(res.data.length);
        setContentsList(res.data.slice((page - 1) * 15, page * 15));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, props.where]);

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
          {contentsList.map((v) => (
            <tr key={v.num}>
              <td className="thNum">{v.num}</td>
              <td className="thTitle">
                <Link to={`${props.where}/${v.num}`}>{v.title}</Link>
              </td>
              <td className="thWriter">{v.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="Pagination"
        defaultCurrent={1}
        total={totalItems}
        pageSize={15}
        onChange={(v) => {
          setPage(v);
        }}
      />
    </>
  );
};

export default ContentsList;
