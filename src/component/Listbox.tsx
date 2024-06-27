import { Table, TableColumnsType } from "antd";
import { useState } from "react";

export default function Listbox() {
  interface DataType {
    key: React.Key;
    contentNum: number;
    content: string;
    writer: string;
    viewCount: number;
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
    {
      title: "조회수",
      dataIndex: "viewCount",
      width: 30,
    },
  ];

  const initialdata: DataType[] = [];
  for (let i = 1; i < 100; i++) {
    initialdata.push({
      key: i,
      writer: `익명 ${i}`,
      contentNum: i,
      content: `게시글 ${i}`,
      viewCount: 0,
    });
  }
  const [data, setData] = useState<DataType[]>(initialdata);

  const handleRowClick = (index: number) => {
    const newData = [...data];
    newData[index].viewCount += 1;
    setData(newData);
  };

  // const [viewCount, setviewCount] = useState(0);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, index) => {
          return {
            onClick: () => {
              handleRowClick(index!);
            },
          };
        }}
        // pagination={{ pageSize: 50 }}
        // scroll={{ y: 240 }}
      />
    </>
  );
}
