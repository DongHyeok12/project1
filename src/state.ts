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

export interface ContantsType {
  num: number;
  title: string;
  writer: string;
}

export const contantsState = atom<ContantsType>({
  key: "contants",
  default: {
    num: 1,
    title: "testing!",
    writer: "unknown~~",
  },
});
