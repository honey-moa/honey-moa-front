import * as S from './style';
import Image from '../Image';
import { ModalProps, RegisterInfo } from './type';
import { useState } from 'react';
import { Svg } from '../Svg';
import { useMutation } from '@tanstack/react-query';
import { Auth } from '../../apis/auth';
import { RegisterRequest } from '../../apis/auth/type';
import { onChangeTextInfo, toggleCheckBox } from './utils';

export default function RegisterModal({ setStep }: ModalProps) {
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    conditions: false,
  });

  const onChangeRegisterInfo = onChangeTextInfo<RegisterInfo>({
    setState: setRegisterInfo,
  });

  const toggleConditions = toggleCheckBox<RegisterInfo>({
    setState: setRegisterInfo,
    key: 'conditions',
  });

  //유효성 검사
  const validationInfo = () => {
    if (registerInfo.password !== registerInfo.passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    if (!registerInfo.conditions) {
      alert('이용약관과 개인정보처리방침에 동의해주세요.');
      return false;
    }
    if (
      !registerInfo.email ||
      !registerInfo.password ||
      !registerInfo.nickname
    ) {
      alert('모든 항목을 입력해주세요.');
      return false;
    }
    return true;
  };

  const mutation = useMutation({
    mutationFn: (registerInfo: RegisterRequest) =>
      Auth.postUserRegister(registerInfo),
    onSuccess: data => {
      console.log('회원가입 성공:', data);
      alert('회원가입 성공!');
    },
    onError: (error: unknown) => {
      console.error('회원가입 실패:', error);
      alert('회원가입 실패. 다시 시도해주세요.');
    },
  });

  const onSubmitRegister: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { email, password, nickname } = registerInfo;
    if (validationInfo()) {
      //api호출
      mutation.mutate({ email, password, nickname });
    }
  };

  return (
    <>
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
        <S.AuthForm onSubmit={onSubmitRegister}>
          <S.ContentInputContainer>
            <div>
              <label htmlFor="email">이메일</label>
              <Svg.InfoIcon size={15} />
            </div>
            <input
              type="email"
              id="email"
              value={registerInfo.email}
              onChange={onChangeRegisterInfo}
              required
            />
          </S.ContentInputContainer>
          <S.ContentInputContainer>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={registerInfo.password}
              onChange={onChangeRegisterInfo}
              required
            />
          </S.ContentInputContainer>
          <S.ContentInputContainer>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <input
              type="password"
              id="passwordCheck"
              value={registerInfo.passwordCheck}
              onChange={onChangeRegisterInfo}
              required
            />
          </S.ContentInputContainer>
          <S.ContentInputContainer>
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              value={registerInfo.nickname}
              onChange={onChangeRegisterInfo}
              required
            />
          </S.ContentInputContainer>
          <S.LoginBottom>
            <div>
              <input
                type="checkbox"
                id="conditions"
                checked={registerInfo.conditions}
                onChange={toggleConditions}
              />
              <label>이용약관과 개인정보처리방침에 동의합니다.</label>
            </div>
          </S.LoginBottom>
          <S.SubmitButton type="submit">회원가입</S.SubmitButton>
        </S.AuthForm>
        <S.ModalBottom>
          <span>이미 계정이 있으신가요?</span>
          <S.LinkedInButton onClick={() => setStep('로그인')}>
            로그인
          </S.LinkedInButton>
        </S.ModalBottom>
      </S.ModalWrapper>
    </>
  );
}
