import * as S from './style';
import Image from '../Image';
import { LoginInfo, ModalProps } from './type';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Auth } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../../apis/auth/type';

export default function LoginModal({ setStep }: ModalProps) {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
    isAutoLogin: false,
  });

  const onChangeLoginInfo: React.ChangeEventHandler<HTMLInputElement> = e => {
    const value = e.target.value;
    setLoginInfo(prev => {
      return {
        ...prev,
        [e.target.id]: value,
      };
    });
  };

  const toggleAutoLogin = () => {
    setLoginInfo(prev => {
      return {
        ...prev,
        isAutoLogin: !prev.isAutoLogin,
      };
    });
  };

  const validationInfo = () => {
    if (!loginInfo.email || !loginInfo.password) {
      alert('모든 항목을 입력해주세요.');
      return false;
    }
    return true;
  };

  const mutation = useMutation({
    mutationFn: (loginInfo: LoginRequest) => Auth.postToken(loginInfo),
    onSuccess: data => {
      console.log('로그인 성공:', data);
      navigate('/honeyJar');
    },
    onError: (error: unknown) => {
      console.error('로그인 실패:', error);
      alert('로그인 실패 아이디 비번을 확인');
    },
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (validationInfo()) {
      mutation.mutate({ email, password });
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <Image
          src="siteLogo.jpg"
          alt="intro"
          width="36px"
          height="36px"
          borderRadius="50%"
        />
        <h2>로그인</h2>
      </S.ModalHeader>
      <S.AuthForm onSubmit={onSubmit}>
        <S.ContentInputContainer>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={loginInfo.email}
            onChange={onChangeLoginInfo}
          />
        </S.ContentInputContainer>
        <S.ContentInputContainer>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={loginInfo.password}
            onChange={onChangeLoginInfo}
          />
        </S.ContentInputContainer>
        <S.LoginBottom>
          <div>
            <input
              type="checkbox"
              id="remember"
              checked={loginInfo.isAutoLogin}
              onChange={toggleAutoLogin}
            />
            <label>로그인 상태 유지</label>
          </div>
          <S.LinkedInButton>비밀번호 찾기</S.LinkedInButton>
        </S.LoginBottom>
        <S.SubmitButton type="submit">로그인</S.SubmitButton>
      </S.AuthForm>
      <S.ModalBottom>
        <span>계정이 없으신가요?</span>
        <S.LinkedInButton onClick={() => setStep('회원가입')}>
          회원가입
        </S.LinkedInButton>
      </S.ModalBottom>
    </S.ModalWrapper>
  );
}
