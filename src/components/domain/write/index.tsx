import { Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { links } from "constant";
import { Link, useParams, useNavigate } from "react-router-dom";
import PictureUpload from "components/common/PictureUpload";
import { ContentsListType } from "type/contents";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["image", "video"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "image",
  "video",
  "width",
  "font-color",
];
const WriteArea = () => {
  const { pageId } = useParams();
  const [contentNum, setContentNum] = useState(0);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const nav = useNavigate();
  const date2String = (date: Date) =>
    `${String(date.getFullYear())}.${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}.${String(date.getDate()).padStart(2, "0")} ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };
  const IDonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setId(e.target.value);
  };
  const PWonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPw(e.target.value);
  };
  const TitleonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };
  const postData = (data: ContentsListType, value: string) => {
    axios
      .post("http://localhost:3000" + value, data)
      .then(() => {})
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
    if (isCheckUpload()) {
      setIsDisable(true);

      postData(
        {
          id: String(contentNum),
          title: title,
          writer: id,
          pw: pw,
          textArea: textArea,
          time: date2String(new Date()),
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
        setContentNum(Number(v.data[v.data.length - 1].id) + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageId]);
  useEffect(() => {
    console.log(textArea);
  }, [textArea]);

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
              <ReactQuill
                value={textArea}
                onChange={setTextArea}
                style={{ height: "600px" }}
                modules={modules}
                formats={formats}
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
