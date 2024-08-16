import { ContentsDetailType } from "type/contents";
import { Post } from "..";

/**
 * 컨텐츠를 등록하는 함수입니다.
 * @param path 등록할 경로
 * @param data 등록할 컨텐츠
 * @returns
 */
export const postContent = async (path: string, data: ContentsDetailType) => {
  try {
    const response = await Post<ContentsDetailType>(path, data);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
