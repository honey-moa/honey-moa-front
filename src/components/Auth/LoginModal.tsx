import * as S from './style';
import Image from '../Image';
import { AuthFunnelStep, LoginInfo, ModalProps } from './type';
import { useState } from 'react';
import { AuthQueries } from '@/apis/auth';
import { validationLoginInfo } from './utils';
import { useNavigate } from 'react-router-dom';
import { Loading } from '..';
import { LoginErrorHandler } from '@/apis/auth/error';
import { changeInfo } from '@/utils';
import { toast } from 'react-toastify';
import useLocalStorage from '@/hook/useLocalStorage';
import useSessionStorage from '@/hook/useSessionStorage';

export default function LoginModal({ setStep }: ModalProps<AuthFunnelStep>) {
  const { set: setAccessTokenToLocalStorage } = useLocalStorage('accessToken');
  const { set: setRefreshTokenToLocalStorage } =
    useLocalStorage('refreshToken');
  const { set: setAccessTokenToSessionStorage } =
    useSessionStorage('accessToken');
  const { set: setRefreshTokenToSessionStorage } =
    useSessionStorage('refreshToken');

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
    isAutoLogin: false,
  });

  const navigate = useNavigate();

  //로그인 정보 변경 핸들러
  const onChangeLoginInfo = changeInfo.text<LoginInfo>({
    setState: setLoginInfo,
  });

  //로그인 상태 저장 토글
  const toggleAutoLogin = changeInfo.toggle<LoginInfo>({
    setState: setLoginInfo,
    key: 'isAutoLogin',
  });

  const mutation = AuthQueries.useLoginQuery();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { email, password, isAutoLogin } = loginInfo;
    const isValid = validationLoginInfo(loginInfo);
    if (isValid.result) {
      mutation.mutate(
        { email, password, isAutoLogin },
        {
          onSuccess: data => {
            navigate('/blog');
            if (isAutoLogin) {
              setAccessTokenToLocalStorage(data.accessToken);
              setRefreshTokenToLocalStorage(data.refreshToken);
            } else {
              setAccessTokenToSessionStorage(data.accessToken);
              setRefreshTokenToSessionStorage(data.refreshToken);
            }
            toast.success('로그인 성공');
          },
          onError: error => {
            toast.error(LoginErrorHandler(error));
          },
        }
      );
    } else {
      toast.error(isValid.message);
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <Image
          src="/images/siteLogo.jpg"
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
            data-testid="email"
            value={loginInfo.email}
            onChange={onChangeLoginInfo}
          />
        </S.ContentInputContainer>
        <S.ContentInputContainer>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            data-testid="password"
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
          <S.LinkedInButton
            type="button"
            onClick={() => setStep('비밀번호 찾기')}
          >
            비밀번호 찾기
          </S.LinkedInButton>
        </S.LoginBottom>
        <S.SubmitButton type="submit">
          {mutation.isPending ? <Loading.Spinner /> : <>로그인</>}
        </S.SubmitButton>
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
