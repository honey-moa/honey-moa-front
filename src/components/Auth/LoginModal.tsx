import * as S from './style';
import Image from '../Image';
import { ModalProps } from './type';

export default function LoginModal({ setStep }: ModalProps) {
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
      <S.AuthForm>
        <S.ContentInputContainer>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
        </S.ContentInputContainer>
        <S.ContentInputContainer>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
        </S.ContentInputContainer>
        <S.LoginBottom>
          <div>
            <input type="checkbox" id="remember" />
            <label>로그인 상태 유지</label>
          </div>
          <S.LinkedInButton>비밀번호 찾기</S.LinkedInButton>
        </S.LoginBottom>
        <S.SubmitButton>로그인</S.SubmitButton>
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
