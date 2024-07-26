import { getContentsResponse } from "type/api/contents";
import { ContentsListType } from "type/contents";

export const links = [
  { path: "/humor", label: "유머" },
  { path: "/free", label: "자유" },
];

export const contents = { num: 1, title: "test1", writer: "unknown1" };
export const contentsArray: ContentsListType[] = [];
export const getTmpContents = (
  page: number, // 몇 페이지부터 받은 것인가
  dataPer = 10 // 몇 개의 데이터를 받은 것인가
): Promise<getContentsResponse> => {
  return new Promise((resolve) => {
    const start = (page - 1) * dataPer;
    const end = start + dataPer;

    for (let i = start + 1; i < end; i++) {
      contentsArray.push({
        num: i,
        title: `test${i}`,
        writer: `unknown${i}`,
      });
    }

    if (page > 100) {
      // 실패 예시
      const response2: getContentsResponse = {
        resultCode: 0,
        errorMessage: "너 page값이 말이 안돼 ",
      };
      return resolve(response2);
    }

    // 예시로 성공 응답을 반환
    const response: getContentsResponse = {
      resultCode: 1,
      data: {
        contents: contentsArray,
      },
    };

    // 실패 예시2
    const response3: getContentsResponse = {
      resultCode: 0,
    };

    resolve(response);
  });
};
