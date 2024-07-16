// 공통 응답 타입
interface SuccessResponse<T> {
  resultCode: 1;
  data: T;
}

interface FailResponse {
  resultCode: Exclude<number, 1>;
  errorMessage?: string;
}

export type APIResponse<T> = SuccessResponse<T> | FailResponse;

// 타입 가드 함수
export function isSuccessResponse<T>(
  response: APIResponse<T>
): response is SuccessResponse<T> {
  return response.resultCode === 1;
}
