import { atom } from "recoil";

export interface ExpathType {
  path: string;
  label: string;
}

export const ExpathState = atom<ExpathType>({
  key: "ExpathState",
  default: {
    path: "/contents/write",
    label: "",
  },
});
