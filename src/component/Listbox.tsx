import { Table } from "antd";
import { useEffect, useState } from "react";
import { columns } from "../constant";

export interface DataType {
  key: React.Key;
  contentNum: number;
  content: string;
  writer: string;
  viewCount: number;
}

export default function Listbox() {
  const [initialdata, setInitialdate] = useState<DataType[]>([]);

  useEffect(() => {
    const data: DataType[] = [];
    for (let i = 1; i < 100; i++) {
      data.push({
        key: i,
        writer: `익명 ${i}`,
        contentNum: i,
        content: `게시글 ${i}`,
        viewCount: 0,
      });
    }

    setInitialdate(data);
  }, []);

  const handleRowClick = (index: number) => {
    const newData = [...initialdata];
    newData[index].viewCount += 1;
    setInitialdate(newData);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={initialdata}
        onRow={(_, index) => {
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
