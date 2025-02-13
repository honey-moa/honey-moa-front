import axios from 'axios';
import {
  CommonRequestInterceptor,
  CommonResponseInterceptor,
  ErrorInterceptor,
  TokenRequestInterceptor,
} from './interceptors';

export const commonInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instanceToken = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가하기
commonInstance.interceptors.request.use(
  CommonRequestInterceptor,
  ErrorInterceptor
);

// 응답 인터셉터 추가하기
commonInstance.interceptors.response.use(
  CommonResponseInterceptor,
  ErrorInterceptor
);

instanceToken.interceptors.request.use(
  TokenRequestInterceptor,
  ErrorInterceptor
);

instanceToken.interceptors.response.use(
  CommonResponseInterceptor,
  ErrorInterceptor
);
