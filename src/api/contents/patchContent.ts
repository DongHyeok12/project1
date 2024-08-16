import { ContentsDetailType } from "type/contents";
import { Patch } from "..";

interface patchContentType {
  view?: number;
  textArea?: string;
  title?: string;
}

/**
 *
 * @param data
 * @param path
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
