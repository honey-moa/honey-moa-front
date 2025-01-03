import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LoginRequest, RegisterRequest } from './type';
import { AuthEndPoint } from '.';

export const LoginQuery = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (loginInfo: LoginRequest) => AuthEndPoint.postToken(loginInfo),
    onSuccess: data => {
      console.log('로그인 성공:', data);
      navigate('/honeyJar');
    },
    onError: (error: unknown) => {
      console.error('로그인 실패:', error);
      alert('로그인 실패 아이디 비번을 확인');
    },
  });
};

export const RegisterQuery = () => {
  return useMutation({
    mutationFn: (registerInfo: RegisterRequest) =>
      AuthEndPoint.postUserRegister(registerInfo),
    onSuccess: data => {
      console.log('회원가입 성공:', data);
      alert('회원가입 성공!');
    },
    onError: (error: unknown) => {
      console.error('회원가입 실패:', error);
      alert('회원가입 실패. 다시 시도해주세요.');
    },
  });
};
