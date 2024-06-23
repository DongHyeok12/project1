import React from "react";
import "./styles/home.css";
import { Table, TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  contentNum: number;
  content: string;
  writer: string;
}

const columns: TableColumnsType<DataType> = [
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
];

const data: DataType[] = [];
// for (let i = 1; i < 100; i++) {
//   data.push({
//     key: i,
//     writer: `익명 ${i}`,
//     contentNum: i,
//     content: `게시글 ${i}`,
//   });
// }

function App() {
  return (
    <>
      <header>
        <h2>게시판</h2>
      </header>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        // scroll={{ y: 240 }}
      />
    </>
  );
}

export default App;
