import { useRecoilValue } from "recoil";
import "../../../styles/styles.css";
import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";
import theme from "../../../styles/theme";
import { useState } from "react";
import { contentsArray } from "../../../constant";
import { pathLabelState } from "../../../recoil/atoms/PathLabelAtoms";

const WriteArea = () => {
  const pathLabel = useRecoilValue(pathLabelState);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const { TextArea } = Input;
  const IDonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.id, "Change:", e.target.value);
    setId(e.target.value);
  };
  const PWonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.id, "Change:", e.target.value);
    setPw(e.target.value);
  };
  const TitleonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.id, "Change:", e.target.value);
    setTitle(e.target.value);
  };
  const TextAreaonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.id, "Change:", e.target.value);
    setTextArea(e.target.value);
  };

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
            <Col>
              <Form.Item
                name="ID"
                label="아&nbsp;이&nbsp;디"
                rules={[
                  { required: true, message: "아이디를 입력하시오." },
                  { max: 8, message: "아이디는 8글자 이하만 가능합니다." },
                ]}
              >
                <Input
                  className="IDPWInput"
                  minLength={1}
                  maxLength={20}
                  onChange={IDonChange}
                />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col>
              <Form.Item
                name="PW"
                label="비밀번호"
                rules={[
                  {
                    min: 4,
                    max: 10,
                    message: "비밀번호는 4~10글자만 가능합니다.",
                  },
                  {
                    required: true,
                    message: "비밀번호를 설정하여 주십시오.",
                  },
                ]}
              >
                <Input.Password
                  className="IDPWInput"
                  maxLength={20}
                  onChange={PWonChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Col span={20}>
            <Form.Item
              name="Title"
              label="제&nbsp;&nbsp;&nbsp;&nbsp;목"
              rules={[{ required: true, message: "제목을 입력하시오." }]}
            >
              <Input showCount maxLength={50} onChange={TitleonChange} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="TextArea"
              rules={[{ required: true, message: "내용을 입력하시오." }]}
            >
              <TextArea
                showCount
                maxLength={3000}
                onChange={TextAreaonChange}
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
              {/* 예외처리 비번 스페이스바 */}
              <Button
                id="Save"
                style={{ float: "right" }}
                onClick={() => {
                  contentsArray.push({ num: 100, title: title, writer: id });
                  console.log(
                    `id : ${id}\npw : ${pw}\ntitle : ${title}\ntextArea : ${textArea}`
                  );
                }}
              >
                저장하기
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default WriteArea;
