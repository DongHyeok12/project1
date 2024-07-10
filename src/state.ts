import { atom } from "recoil";

export interface PathLabelType {
  path: string;
  label: string;
}

export const pathLabelState = atom<PathLabelType>({
  key: "pathLabel",
  default: {
    path: "/",
    label: "홈",
  },
});
