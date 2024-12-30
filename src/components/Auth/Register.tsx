import { useState } from 'react';
import * as S from './style';
import Modal from '../Modal';
import Image from '../Image/Image';

export default function Register() {
  const [totalOpen, setTotalOpen] = useState<boolean>(false);
  return (
    <>
      <S.RegisterButton onClick={() => setTotalOpen(!totalOpen)}>
        회원가입
      </S.RegisterButton>
      <Modal isOpen={totalOpen}>
        <S.ModalWrapper>
          <S.ModalHeader>
            <Image
              src="siteLogo.jpg"
              alt="intro"
              width="36px"
              height="36px"
              borderRadius="50%"
            />
            <h2>회원가입</h2>
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
            <S.ContentInputContainer>
              <label htmlFor="passwordCheck">비밀번호 확인</label>
              <input type="password" id="passwordCheck" />
            </S.ContentInputContainer>
            <S.ContentInputContainer>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" />
            </S.ContentInputContainer>
            <S.LoginBottom>
              <div>
                <input type="checkbox" id="conditions" />
                <label>이용약관과 개인정보처리방침에 동의합니다.</label>
              </div>
            </S.LoginBottom>
            <S.SubmitButton>회원가입</S.SubmitButton>
          </S.AuthForm>
          <S.ModalBottom>
            <span>이미 계정이 있으신가요?</span>
            <S.LinkedInButton>로그인</S.LinkedInButton>
          </S.ModalBottom>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}
