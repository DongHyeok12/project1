import { Button, Col, Form, Input, Row } from "antd";
import { getContent } from "api/contents/getContent";
import { patchContent } from "api/contents/patchContent";
import { decryptPw } from "api/password";
import { links } from "constant/index";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentsDetailType } from "type/contents";
import { quillModules, quillToolbar } from "utill/quill/configQuill";

const ModifyArea = () => {
  const { pageId, contentsNumber } = useParams<{
    pageId: string;
    contentsNumber: string;
  }>();
  const [data, setData] = useState<ContentsDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const quillRef = useRef<ReactQuill>(null);
  const [formData, setFormData] = useState({
    title: "",
    textArea: "",
  });
  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({ ...prevData, [field]: value }));
  };
  const nav = useNavigate();

  useEffect(() => {
    // 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      const res = await getContent(`/${pageId}?id=${contentsNumber}`);
      if (res) {
        setData(res);
      }
      setLoading(false);
    };
    fetchData();
  }, [pageId, contentsNumber]);

  const handleModify = async () => {
    setIsDisable(true);
    const { title, textArea } = formData;

    const result = await patchContent(`/${pageId}/${contentsNumber}`, {
      title,
      textArea,
    });

    if (result) {
      alert("게시물 수정 성공!");
      nav(nowPage.path);
    } else {
      alert("게시물 수정에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (data && !loading) {
      const inputPw = prompt("비밀번호를 입력하세요");
      const isPass = decryptPw(data.pw) === inputPw;
      if (!isPass) {
        alert("비밀번호가 일치하지 않습니다.");
        nav(`/${pageId}/${contentsNumber}`);
      }
    }
  }, [contentsNumber, data, loading, nav, pageId]);
  useEffect(() => {}, []);

  if (loading) return <>loading</>;

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
              <Form.Item name="writer" label="닉&nbsp;네&nbsp;임">
                <Input
                  className="IDPWInput"
                  defaultValue={data!.writer}
                  onChange={(e) => handleInputChange("writer", e.target.value)}
                  disabled={true}
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
                defaultValue={data!.title}
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
                ref={quillRef}
                value={data!.textArea}
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
                onClick={handleModify}
              >
                수정하기
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default ModifyArea;
