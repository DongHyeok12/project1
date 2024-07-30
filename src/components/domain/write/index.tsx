import { Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { links } from "constant";
import { Link, useParams, useNavigate } from "react-router-dom";
import PictureUpload from "components/common/PictureUpload";
import { ContentsListType } from "type/contents";
import axios from "axios";

const WriteArea = () => {
  const { pageId } = useParams();
  const [contentNum, setContentNum] = useState(0);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const { TextArea } = Input;
  const nav = useNavigate();

  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };
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
  const postData = (data: ContentsListType, value: string) => {
    axios
      .post("http://localhost:3000" + value, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isCheckUpload = () => {
    if (
      id.length < 9 &&
      id.length > 0 &&
      pw.length < 11 &&
      pw.length > 3 &&
      title.length > 0 &&
      textArea.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  const [isDisable, setIsDisable] = useState(false);
  const handleSave = () => {
    console.log(
      `id : ${id}\npw : ${pw}\ntitle : ${title}\ntextArea : ${textArea}\npage : ${pageId}`
    );

    if (isCheckUpload()) {
      setIsDisable(true);
      postData(
        {
          num: contentNum,
          title: title,
          writer: id,
          pw: pw,
          textArea: textArea,
        },
        nowPage.path
      );

      // 데이터를 성공적으로 저장한 후 페이지를 이동
      nav(nowPage.path);
    } else {
      alert("잘못된 데이터가 있습니다.");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/" + pageId)
      .then((v) => {
        setContentNum(v.data[v.data.length - 1].num + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="underline">
        <Link className="SubHead_a" to={`${nowPage.path}`}>
          {nowPage.label}
        </Link>{" "}
        <Link className="SubHead_b" to={`${nowPage.path}`}>
          게시판
        </Link>
      </div>
      <div className="PostArea">
        <Form>
          <Row>
            <Col>
              <Form.Item
                name="ID"
                label="닉&nbsp;네&nbsp;임"
                rules={[
                  { required: true, message: "닉네임을 입력하시오." },
                  { max: 8, message: "닉네임은 8글자 이하만 가능합니다." },
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
          <Form.Item>
            <PictureUpload />
          </Form.Item>
          <Col span={30}>
            <Form.Item>
              <Button
                id="Save"
                style={{ float: "right" }}
                onClick={handleSave}
                disabled={isDisable}
              >
                저장하기
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default WriteArea;
