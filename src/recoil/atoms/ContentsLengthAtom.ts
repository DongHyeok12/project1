import { atom } from "recoil";

export const contentsLengthState = atom<number>({
  key: "contentsLength",
  default: 0,
});
