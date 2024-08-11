import { ContentsListType } from "@type/contents";
import { Post } from "..";

/**
 *
 * @param data
 * @param path
 */
export const postContent = async (data: ContentsListType, path: string) => {
  try {
    const response = await Post<ContentsListType>(path, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
