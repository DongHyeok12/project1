import CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_SECRET_KEY as string;

/**
 * 주어진 값을 암호화하는 함수입니다.
 * @param pw 암호화 할 값
 * @returns 암호화 된 값
 */

export const encryptPw = (pw: string) => {
  const encrypt = CryptoJS.AES.encrypt(pw, secretKey).toString();
  return encrypt;
};

/**
 * 암호화된 값을 복호화하는 함수입니다.
 * @param hash 암호화 된 값
 * @returns 복호화 된 값
 */
export const decryptPw = (hash: string) => {
  const decrypt = CryptoJS.AES.decrypt(hash, secretKey);
  return decrypt.toString(CryptoJS.enc.Utf8);
};
