import { Upload, UploadProps, UploadFile } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";

interface PictureUploadType extends UploadFile {
  uid: string;
  name: string;
  status: "done" | "error" | "uploading" | "removed" | undefined;
}

const PictureUpload: React.FC = () => {
  const [fileList, setFileList] = useState<PictureUploadType[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList as PictureUploadType[]);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url;
    if (!src) {
      src = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default PictureUpload;
