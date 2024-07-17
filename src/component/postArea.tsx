import { useRecoilValue } from "recoil";
import "../styles/styles.css";
import { Button, Col, Form, Input, Row } from "antd";
import { pathLabelState } from "../state";
import TextArea from "antd/es/input/TextArea";

export default function PostArea() {
  const pathLabel = useRecoilValue(pathLabelState);
  return (
    <>
      <div className="underline">
        <a className="SubHead_a" href={`${pathLabel.path}`}>
          {pathLabel.label}
        </a>{" "}
        <a className="SubHead_b" href={`${pathLabel.path}`}>
          게시판
        </a>
      </div>
      <div className="PostArea">
        <Form>
          <Row gutter={16}>
            <Col span={5}>
              <Form.Item label="아&nbsp;이&nbsp;디">
                <Input id="ID" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="비밀번호">
                <Input id="PW" />
              </Form.Item>
            </Col>
          </Row>
          <Col span={16}>
            <Form.Item label="제&nbsp;&nbsp;&nbsp;&nbsp;목">
              <Input id="Title" />
            </Form.Item>
          </Col>

          <Row gutter={16}>
            <Col span={4}>
              <Form.Item>
                <textarea />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={4}>
              <Form.Item>
                <Button id="Save">저장하기</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
