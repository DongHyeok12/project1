/**
 * 날짜 데이터를 String으로 변환해주는 함수입니다.
 * 예) data: ~~~
 * @param date 날짜 데이터
 * @returns string
 */
export const dateToString = (date: Date) =>
  `${String(date.getFullYear())}.${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
