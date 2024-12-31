import { useState } from 'react';
import * as S from './style';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { modalLocation } from './auth';

export default function Auth() {
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);

  const onClickModalButton = (location: modalLocation) => {
    if (location === 'login') {
      setLoginOpen(prev => !prev);
    } else {
      setRegisterOpen(prev => !prev);
    }
  };

  const onClickOtherModalOpen = (location: modalLocation) => {
    if (location === 'login') {
      setLoginOpen(prev => !prev);
      setRegisterOpen(prev => !prev);
    } else {
      setLoginOpen(prev => !prev);
      setRegisterOpen(prev => !prev);
    }
  };

  return (
    <>
      <S.LoginButton onClick={() => onClickModalButton('login')}>
        로그인
      </S.LoginButton>
      <LoginModal isOpen={loginOpen} onClose={onClickOtherModalOpen} />
      <S.RegisterButton onClick={() => onClickModalButton('register')}>
        회원가입
      </S.RegisterButton>
      <RegisterModal isOpen={registerOpen} onClose={onClickOtherModalOpen} />
    </>
  );
}
