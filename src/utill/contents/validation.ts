/**
 *
 * @param writer
 * @param pw
 * @param title
 * @param textArea
 * @returns
 */
export const isValidContent = (
  writer: string,
  pw: string,
  title: string,
  textArea: string
): boolean => {
  return (
    isValidNickname(writer) &&
    isValidPassword(pw) &&
    isValidTitle(title) &&
    isValidTextarea(textArea)
  );
};

export const isValidNickname = (writer: string): boolean => {
  // 닉네임 유효성 검사 로직 추가 (예: 길이, 특수문자 등)
  return writer.length > 0 && writer.length <= 8;
};

export const isValidPassword = (pw: string): boolean => {
  // 비밀번호 유효성 검사 로직 추가 (예: 길이, 숫자 포함 등)
  return pw.length >= 4 && pw.length <= 10;
};

export const isValidTitle = (title: string): boolean => {
  // 제목 유효성 검사 로직 추가 (예: 길이 등)
  return title.length > 0;
};

export const isValidTextarea = (textArea: string): boolean => {
  // 텍스트 영역 유효성 검사 로직 추가 (예: 내용 여부 등)
  return textArea.length > 0;
};
