//요청 인터셉터
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { AuthQueries } from './auth';

//요청 인터셉터
export function CommonRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  config.headers['X-Api-Key'] = import.meta.env.VITE_API_KEY;
  return config;
}

//토큰 있는 요청 인터셉터
export function TokenRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  config.headers['X-Api-Key'] = import.meta.env.VITE_API_KEY;
  config.headers['Authorization'] = `Bearer ${window.localStorage.getItem(
    'accessToken'
  )}`;
  return config;
}

//응답 인터셉터
export function CommonResponseInterceptor(
  response: AxiosResponse
): AxiosResponse {
  // Do something with response data
  return response;
}

//에러 인터셉터
export function ErrorInterceptor(error: AxiosError) {
  const { code } = error.response?.data as { code: string };
  if (code === 'INVALID_TOKEN') {
    AuthQueries.ReissueAccessTokenMutate();
  }
  if (code === 'SERVER_ERROR') {
    return toast.error('서버 오류 입니다. 잠시 후 다시 시도해주세요.');
  }
  return Promise.reject(error);
}
