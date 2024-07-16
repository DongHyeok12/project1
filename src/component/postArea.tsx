import { Form } from "react-router-dom";
import "../styles/styles.css";
import { Button, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";

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
    <Form name="validate_other" {...formItemLayout} style={{ maxWidth: 600 }}>
      <Input.Group>
        <Input />
        <Input />
        <Input />
      </Input.Group>
      <TextArea />
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form>
  );
}
