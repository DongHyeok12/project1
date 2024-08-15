import CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_SECRET_KEY as string;

export const encryptPw = (pw: string) => {
  const encrypt = CryptoJS.AES.encrypt(pw, secretKey).toString();
  return encrypt;
};

export const decryptPw = (hash: string) => {
  const decrypt = CryptoJS.AES.decrypt(hash, secretKey);
  return decrypt.toString(CryptoJS.enc.Utf8);
};
