import { ContentsDetailType } from "type/contents";
import { Get } from "..";

/**
 * 컨텐츠 데이터를 가져오는 함수입니다.
 * @param path 가져올 경로
 * @returns
 */
export const getContent = async (path: string) => {
  try {
    const response = await Get<ContentsDetailType[]>(path);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
