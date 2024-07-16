import { ContentsType } from "../component/Listbox";

export const links = [
  { path: "/humor", label: "유머" },
  { path: "/free", label: "자유" },
];

export const contents = { num: 1, title: "test1", writer: "unknown1" };

export const getTmpContents = (
  page: number, // 몇 페이지부터 받은 것인가
  dataPer = 10 // 몇 개의 데이터를 받은 것인가
): Promise<ContentsType[]> => {
  return new Promise((resolve) => {
    const contentsArray: ContentsType[] = [];
    const start = (page - 1) * dataPer;
    const end = start + dataPer;

    for (let i = start; i < end; i++) {
      contentsArray.push({
        num: i + 1,
        title: `test${i + 1}`,
        writer: `unknown${i + 1}`,
      });
    }
    resolve(contentsArray);
  });
};
