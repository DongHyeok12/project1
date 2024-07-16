import { getTmpContents } from "../../constant";
import { isSuccessResponse } from "../../type/api";
import { getContentsResponse } from "../../type/api/contents";

/**
 *
 * @param page 현재 페이지
 * @param dataPer 하나의 페이지의 표시 데이터 수
 * @returns API 성공 시, ContentsType / 실패 시, throw Error 메시지
 */
export const getContents = async (page: number, dataPer = 10) => {
  const response = await getTmpContents(page, dataPer);
  if (isSuccessResponse(response)) {
    return response.data;
  } else {
    throw new Error(
      response.errorMessage || "실패도 했고 에러 메시지도 없다~ 고말이야"
    );
  }
};
