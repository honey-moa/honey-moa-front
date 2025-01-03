import * as S from './style';
import Image from '../Image';
import { LoginInfo, ModalProps } from './type';
import { useState } from 'react';
import { AuthQueries } from '../../apis/auth';
import { onChangeTextInfo, toggleCheckBox } from './utils';

export default function LoginModal({ setStep }: ModalProps) {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
    isAutoLogin: false,
  });

  //로그인 정보 변경 핸들러
  const onChangeLoginInfo = onChangeTextInfo<LoginInfo>({
    setState: setLoginInfo,
  });

  //로그인 상태 저장 토글
  const toggleAutoLogin = toggleCheckBox<LoginInfo>({
    setState: setLoginInfo,
    key: 'isAutoLogin',
  });

  const validationInfo = () => {
    if (!loginInfo.email || !loginInfo.password) {
      alert('모든 항목을 입력해주세요.');
      return false;
    }
    return true;
  };

  const mutation = AuthQueries.LoginQuery();

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
