import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInterceptor = axios.create({
  baseURL: process.env.REACT_APP_BACK,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET 요청 함수
export async function Get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInterceptor.get<T>(
      url,
      config
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

// POST 요청 함수
export async function Post<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInterceptor.post<T>(
      url,
      data,
      config
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
