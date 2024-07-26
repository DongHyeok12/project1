import { APIResponse } from "..";
import { ContentsListType } from "type/contents";

export type getContentsResponse = APIResponse<{
  contents: ContentsListType[];
}>;
