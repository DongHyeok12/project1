import "../styles/styles.css";
import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";

export default function PostArea() {
  const { Option } = Select;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form>
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item label="아이디">
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="비밀번호">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="제목">
        <Input />
      </Form.Item>

      <Row gutter={16}>
        <Col span={4}>
          <Form.Item>
            <Button>저장하기</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
