import { ContentsDetailType } from "type/contents";
import { Get } from "..";

/**
 *
 * @param data
 * @param path
 */
export const getContent = async (path: string) => {
  try {
    const response = await Get<ContentsDetailType[]>(path);
    return response[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
