import { ContentsDetailType } from "type/contents";
import { Delete } from "..";

/**
 *
 * @param data
 * @param path
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
