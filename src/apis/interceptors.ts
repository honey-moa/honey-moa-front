//요청 인터셉터
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { AuthEndPoint } from './auth';
import { instanceToken } from './axiosInstance';

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
export async function ErrorInterceptor(error: AxiosError) {
  const { code } = error.response?.data as { code: string };
  if (code === 'INVALID_TOKEN') {
    console.log('토큰 없음');
    try {
      const response = await AuthEndPoint.reissueAccessToken();
      window.localStorage.setItem('accessToken', response.accessToken);

      if (error.config) {
        error.config.headers[
          'Authorization'
        ] = `Bearer ${response.accessToken}`;
        const result = await instanceToken(error.config);
        return result;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const { code } = error.response?.data as { code: string };
      if (code === 'INVALID_TOKEN') {
        toast.error('토근 재발급에 실패했습니다. 다시 로그인 해 주세요');
        window.location.href = '/root';
        window.localStorage.clear();
        return;
      }
    }
  }
  if (code === 'SERVER_ERROR') {
    return toast.error('서버 오류 입니다. 잠시 후 다시 시도해주세요.');
  }
  return Promise.reject(error);
}
