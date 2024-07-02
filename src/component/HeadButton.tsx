import React from "react";
import { Button, Space } from "antd";
import "../styles/HeadButton.css";

export default function HeadButton() {
  return (
    <>
      <Space>
        <Space.Compact direction="horizontal">
          <Button type="primary" className="HeadButton">
            Button 1
          </Button>
          <Button type="primary">Button 2</Button>
          <Button type="primary">Button 3</Button>
        </Space.Compact>
      </Space>
    </>
  );
}
