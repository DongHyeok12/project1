import { ContentsDetailType } from "type/contents";
import { Delete } from "..";

/**
 * 컨텐츠를 삭제하는 함수입니다.
 * @param path 삭제할 컨텐츠 경로
 * @returns
 */
export const deleteContent = async (path: string) => {
  try {
    const response = await Delete<ContentsDetailType>(path);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
