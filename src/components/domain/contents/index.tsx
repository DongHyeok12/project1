import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContentsListType } from "type/contents";
import axios from "axios";
import { Pagination } from "antd";
interface pageIdType {
  pageId: string;
}
const ContentsList = (props: pageIdType) => {
  const [contentsList, setContentsList] = useState<ContentsListType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { pageId } = props;
  const [pageNum, setPageNum] = useSearchParams({ page: "1" });
  const page = Number(pageNum.get("page"));
  console.log(page);
  function sortData(data: ContentsListType[]) {
    data.sort(function (a: ContentsListType, b: ContentsListType) {
      return Number(b.id) - Number(a.id);
    });
  }
  useEffect(() => {
    if (page === 0) {
      setPageNum({ page: "1" });
    }
    axios
      .get("http://localhost:3000/" + pageId)
      .then((res) => {
        sortData(res.data);
        setTotalItems(res.data.length);
        setContentsList(res.data.slice((page - 1) * 15, page * 15));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageId, pageNum]);

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
            <tr key={v.id}>
              <td className="thNum">{v.id}</td>
              <td className="thTitle">
                <Link to={`/${pageId}/${v.id}`}>{v.title}</Link>{" "}
                <span className="time">{v.time}</span>
              </td>
              <td className="thWriter">{v.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {console.log(page)}
      <Pagination
        style={{ float: "right" }}
        current={page}
        total={totalItems}
        pageSize={15}
        onChange={(v) => {
          setPageNum({ page: String(v) });
        }}
      />
    </>
  );
};

export default ContentsList;
