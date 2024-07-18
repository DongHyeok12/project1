import { atom } from "recoil";

export interface ContentsType {
  num: number;
  title: string;
  writer: string;
}

export const contentsState = atom<ContentsType>({
  key: "contents",
  default: {
    num: 1,
    title: "testing!",
    writer: "unknown~~",
  },
});
