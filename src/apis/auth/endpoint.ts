import { BeforeAuthInstance } from '../axiosInstance';
import {
  LoginRequest,
  LoginReturn,
  RegisterRequest,
  RegisterReturn,
} from './type';

//로그인 api
export async function postToken(loginInfo: LoginRequest): Promise<LoginReturn> {
  //email, password encoding
  const combined = `${loginInfo.email}:${loginInfo.password}`;
  const encodeCombined = btoa(combined);
  const response = await BeforeAuthInstance.post(
    '/tokens',
    {},
    {
      headers: {
        Authorization: `Basic ${encodeCombined}`,
      },
    }
  );
  return response.data;
}

//회원가입 api
export async function postUserRegister(
  registerInfo: RegisterRequest
): Promise<RegisterReturn> {
  const response = await BeforeAuthInstance.post('/users', registerInfo);
  return response.data;
}
