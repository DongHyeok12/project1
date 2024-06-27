import { TableColumnsType } from "antd";
import { DataType } from "../component/Listbox";

export const columns: TableColumnsType<DataType> = [
  {
    title: "번호",
    dataIndex: "contentNum",
    width: 15,
  },
  {
    title: "게시글",
    dataIndex: "content",
    width: 150,
  },
  {
    title: "작성자",
    dataIndex: "writer",
    width: 60,
  },
  {
    title: "조회수",
    dataIndex: "viewCount",
    width: 30,
  },
];
