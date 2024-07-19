import { APIResponse } from "..";
import { ContentsType } from "type/contents";

export type getContentsResponse = APIResponse<{
  contents: ContentsType[];
}>;
