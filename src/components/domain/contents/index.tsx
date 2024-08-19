import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContentsDetailType } from "type/contents";
import { Pagination } from "antd";
import { getContent } from "api/contents/getContent";
interface pageIdType {
  pageId: string;
}
const ContentsList = (props: pageIdType) => {
  const [contentsList, setContentsList] = useState<ContentsDetailType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { pageId } = props;
  const [pageNum, setPageNum] = useSearchParams({ page: "1" });
  const page = Number(pageNum.get("page"));
  function sortData(data: ContentsDetailType[]) {
    data.sort(function (a: ContentsDetailType, b: ContentsDetailType) {
      return Number(b.id) - Number(a.id);
    });
  }
  useEffect(() => {
    if (page === 0) {
      setPageNum({ page: "1" });
    }
    const fetchData = async () => {
      const response = await getContent(`/${pageId}`);
      if (response) {
        sortData(response);
        setTotalItems(response.length);
        setContentsList(response.slice((page - 1) * 15, page * 15));
      }
    };
    fetchData();
  }, [page, pageId, pageNum, setPageNum]);

  return (
    <>
      <table>
        <thead className="ListBox">
          <tr>
            <th className="thNum">번호</th>
            <th className="thTitle">제목</th>
            <th className="thWriter">작성자</th>
            <th className="thView">조회수</th>
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
              <td className="thView">{v.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="pagination"
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
