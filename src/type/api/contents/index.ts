import { APIResponse } from "..";
import { ContentsDetailType } from "type/contents";

export type getContentsResponse = APIResponse<{
  contents: ContentsDetailType[];
}>;
