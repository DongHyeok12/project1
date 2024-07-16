import "../styles/styles.css";
import { Button, Col, Form, Input, Row } from "antd";

export default function PostArea() {
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
