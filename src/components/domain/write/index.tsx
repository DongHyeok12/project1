import { Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState, useCallback } from "react";
import { links } from "constant";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";
import { quillModules, quillToolbar } from "utill/quill/configQuill";
import { dateToString } from "utill/dateFomat";
import { postContent } from "api/contents/postContents";
import { isValidContent } from "utill/contents/validation";

Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

const WriteArea = () => {
  const nav = useNavigate();
  const { pageId } = useParams();

  const [formData, setFormData] = useState<any>({
    contentNum: 0,
    id: "",
    pw: "",
    title: "",
    textArea: "",
  });

  const [isDisable, setIsDisable] = useState(true);

  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({ ...prevData, [field]: value }));
  };

  const handleSave = useCallback(async () => {
    setIsDisable(true);
    const { contentNum, id, pw, title, textArea } = formData;

    const result = await postContent(
      {
        id: String(contentNum),
        title,
        writer: id,
        pw,
        textArea,
        time: dateToString(new Date()),
      },
      nowPage.path
    );

    if (result) {
      nav(nowPage.path);
    } else {
      alert("게시물 저장에 실패했습니다.");
    }
  }, [formData, nowPage.path, nav]);

  useEffect(() => {
    const { id, pw, title, textArea } = formData;
    setIsDisable(!isValidContent(id, pw, title, textArea));

    return () => {
      setIsDisable(true);
    };
  }, [formData]);

  useEffect(() => {
    const fetchContentNum = async () => {
      try {
        const response = await axios.get("http://localhost:3308/" + pageId);
        const lastContentNum = Number(
          response.data[response.data.length - 1].id
        );
        setFormData((prevData: any) => ({
          ...prevData,
          contentNum: lastContentNum + 1,
        }));
      } catch (error) {
        console.error("Error fetching content number:", error);
      }
    };

    fetchContentNum();
  }, [pageId]);

  return (
    <>
      <div className="underline">
        <Link className="SubHead_a" to={nowPage.path}>
          {nowPage.label}
        </Link>{" "}
        <Link className="SubHead_b" to={nowPage.path}>
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
                  onChange={(e) => handleInputChange("id", e.target.value)}
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
                  onChange={(e) => handleInputChange("pw", e.target.value)}
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
              <Input
                showCount
                maxLength={50}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="TextArea"
              rules={[{ required: true, message: "내용을 입력하시오." }]}
            >
              <ReactQuill
                value={formData.textArea}
                onChange={(value) => handleInputChange("textArea", value)}
                style={{ height: "600px" }}
                modules={quillModules}
                formats={quillToolbar}
              />
            </Form.Item>
          </Col>

          <Col span={30}>
            <Form.Item>
              <Button
                id="Save"
                style={{ float: "right", marginTop: "40px" }}
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
