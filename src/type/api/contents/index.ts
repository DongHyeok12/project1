import { APIResponse } from "..";
import { ContentsType } from "../../contents";

export type getContentsResponse = APIResponse<{
  contents: ContentsType[];
}>;
