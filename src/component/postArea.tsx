import { useRecoilValue } from "recoil";
import "../styles/styles.css";

import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";
import { pathLabelState } from "../state";
import theme from "../styles/theme";

const { TextArea } = Input;
const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log(e.target.id, "Change:", e.target.value);
};

export default function PostArea() {
  const pathLabel = useRecoilValue(pathLabelState);

  return (
    <ConfigProvider theme={theme}>
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
          <Row>
            <Col span={5}>
              <Form.Item label="아&nbsp;이&nbsp;디">
                <Input id="ID" maxLength={20} onChange={onChange} />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={5}>
              <Form.Item label="비밀번호">
                <Input id="PW" maxLength={20} onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
          <Col span={20}>
            <Form.Item label="제&nbsp;&nbsp;&nbsp;&nbsp;목">
              <Input id="Title" showCount maxLength={50} onChange={onChange} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <TextArea
                id="TextArea"
                showCount
                maxLength={3000}
                onChange={onChange}
                placeholder="내용을 입력하시오."
                style={{
                  height: 600,
                  resize: "none",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={30}>
            <Form.Item>
              <Button id="Save" style={{ float: "right" }}>
                저장하기
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </ConfigProvider>
  );
}
