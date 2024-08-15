import { ContentsDetailType } from "type/contents";
import { Post } from "..";

/**
 *
 * @param data
 * @param path
 */
export const postContent = async (data: ContentsDetailType, path: string) => {
  try {
    const response = await Post<ContentsDetailType>(path, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
