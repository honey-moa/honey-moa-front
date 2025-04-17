//요청 인터셉터
import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { AuthEndPoint } from './auth';
import { instanceToken } from './axiosInstance';
import { toast } from 'react-toastify';
import { isStorageWithKey } from '@/utils/storage/isStorageWithKey';

//요청 인터셉터
export function CommonRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  config.headers['X-Api-Key'] = import.meta.env.VITE_API_KEY;
  return config;
}

//응답 인터셉터
export function CommonResponseInterceptor(
  response: AxiosResponse
): AxiosResponse {
  // Do something with response data
  return response;
}

//토큰 있는 요청 인터셉터
export function TokenRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  config.headers['X-Api-Key'] = import.meta.env.VITE_API_KEY;
  const accessToken = isStorageWithKey('accessToken')
    ? window.localStorage.getItem('accessToken')
    : window.sessionStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;
  } else {
    throw new Error('로그인한 사용자가 아닙니다.');
  }
  return config;
}

//에러 인터셉터
export async function ErrorInterceptor(error: AxiosError) {
  const { config } = error;
  const originalRequest = config as AxiosRequestConfig & { _retry?: boolean };

  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = isStorageWithKey('refreshToken')
      ? window.localStorage.getItem('refreshToken')
      : window.sessionStorage.getItem('refreshToken');
    try {
      const newToken = await AuthEndPoint.reissueAccessToken(refreshToken);
      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${newToken.accessToken}`,
      };
      // 재요청
      return instanceToken(originalRequest);
    } catch (error) {
      // refreshToken 만료시 로그아웃 처리
      toast.error('회원 인증이 만료되었습니다. 다시 로그인 해주세요.');
      if (isStorageWithKey('accessToken')) {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
      } else {
        window.sessionStorage.removeItem('accessToken');
        window.sessionStorage.removeItem('refreshToken');
      }
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
}
