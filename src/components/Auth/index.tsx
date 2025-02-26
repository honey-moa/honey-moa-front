import { useState } from 'react';
import * as S from './style';
import useFunnel from '../../hook/useFunnel';
import { AuthFunnelStep, SelectModalButton } from './type';
import { AuthFunnelModal } from './AuthFunnelModal';

export default function Auth() {
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const { Funnel, setStep } = useFunnel<AuthFunnelStep>('로그인');

  const onClickModalButton = ({ location }: SelectModalButton) => {
    if (location === '로그인') setStep('로그인');
    if (location === '회원가입') setStep('회원가입');
    setAuthOpen(prev => !prev);
  };

  return (
    <>
      <S.LoginButton
        data-testid="open-login-modal"
        onClick={() => onClickModalButton({ location: '로그인' })}
      >
        로그인
      </S.LoginButton>
      <S.RegisterButton
        onClick={() => onClickModalButton({ location: '회원가입' })}
      >
        회원가입
      </S.RegisterButton>
      <AuthFunnelModal
        Funnel={Funnel}
        setStep={setStep}
        isShow={authOpen}
        setIsShow={setAuthOpen}
      />
    </>
  );
}
