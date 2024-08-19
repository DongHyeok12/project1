import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import ReactQuill from "react-quill";
import { getContent } from "api/contents/getContent";
import { patchContent } from "api/contents/patchContent";
import { decryptPw } from "api/password";
import { links } from "constant/index";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentsDetailType } from "type/contents";
import { quillModules, quillToolbar } from "utill/quill/configQuill";
import { isValidModify } from "utill/contents/validation";

const ModifyArea = () => {
  const { pageId, contentsNumber } = useParams<{
    pageId: string;
    contentsNumber: string;
  }>();
  const [data, setData] = useState<ContentsDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [inputPw, setInputPw] = useState("");
  const quillRef = useRef<ReactQuill>(null);
  const [modalOpen, setModalOpen] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    textArea: "",
  });
  const nowPage = links.find((link) => link.path === "/" + pageId) || {
    path: "",
    label: "알 수 없는",
  };

  const nav = useNavigate();

  useEffect(() => {
    // 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      const response = await getContent(`/${pageId}?id=${contentsNumber}`);
      if (response) {
        const res = response[0];
        setData(res);
        setFormData({
          title: res.title,
          textArea: res.textArea || "",
        });
      }
    };
    fetchData();
  }, [pageId, contentsNumber]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({ ...prevData, [field]: value }));
  };

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
  const isModalPwPass = () => {
    if (data) {
      const isPass = decryptPw(data.pw) === inputPw;
      if (inputPw === "" || !isPass) {
        alert("비밀번호가 일치하지 않습니다.");
        nav(`/${pageId}/${contentsNumber}`);
      } else {
        setLoading(false);
        setModalOpen(false);
      }
    }
  };

  useEffect(() => {
    const { title, textArea } = formData;
    setIsDisable(!isValidModify(title, textArea));
  }, [formData]);

  useEffect(() => {
    const quillData = async () => {
      if (quillRef.current && data) {
        await quillRef.current
          .getEditor()
          .setContents(
            quillRef.current.getEditor().clipboard.convert(data.textArea) || {}
          );
      }
    };
    quillData();
  }, [data, modalOpen]);

  if (loading)
    return (
      <>
        <Modal
          title={<p>수정을 하시려면 비밀번호를 입력하세요.</p>}
          open={modalOpen}
          footer={<Button onClick={isModalPwPass}>확인</Button>}
          closable={false}
          closeIcon={false}
          maskClosable={false}
        >
          <p>비밀번호를 입력한 후 확인 버튼을 눌러주세요.</p>
          <label>비밀번호:&nbsp;&nbsp;&nbsp;</label>
          <Input
            onChange={(e) => {
              setInputPw(e.target.value);
            }}
            style={{ width: "200px" }}
          />
        </Modal>
        <p>loading...</p>
      </>
    );
  else if (!data)
    return (
      <>
        {alert("존재하지 않는 게시글 입니다.")}
        {window.location.replace("/" + pageId)}
      </>
    );

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
                  defaultValue={data.writer}
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
                defaultValue={data.title}
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
                placeholder="내용을 입력하시오."
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
                onClick={handleModify}
                disabled={isDisable}
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
