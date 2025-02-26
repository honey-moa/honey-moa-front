import { instanceToken } from '../axiosInstance';
import { GetMyInfoReturn } from './type';

//내 정보 조회
export async function getMyInfo(): Promise<GetMyInfoReturn> {
  const response = await instanceToken.get('/users/me');

  return response.data;
}

//이메일 인증 재발급
export async function postReissueEmailVerifyToken(): Promise<void> {
  const response = await instanceToken.post(
    '/users/me/user-verify-tokens/email'
  );
  return response.data;
}
