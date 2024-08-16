import { ContentsDetailType } from "type/contents";
import { Patch } from "..";

interface patchContentType {
  view?: number;
  textArea?: string;
  title?: string;
}

/**
 * 컨텐츠를 일부 수정하는 함수입니다.
 * @param path 수정할 컨텐츠 경로
 * @param data 수정할 내용
 * @returns
 */
export const patchContent = async (path: string, data: patchContentType) => {
  try {
    const response = await Patch<ContentsDetailType>(path, data);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
