import { Quill } from "react-quill";
import { ImageActions } from "@xeger/quill-image-actions";

Quill.register("modules/imageActions", ImageActions);

export const quillModules = {
  imageActions: {},

  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["image", "video"],
      [{ color: [] }, { background: [] }],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
    ],
    imageResize: { module: ["Resize"], align: "disable" },
  },
};
export const quillToolbar = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "float",
  "indent",
  "background",
  "color",
  "image",
  "video",
  "width",
  "height",
  "font-color",
];
