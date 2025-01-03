import * as S from './style';
import Image from '../Image';
import { ModalProps, RegisterInfo } from './type';
import { useState } from 'react';
import { Svg } from '../Svg';
import { AuthQueries } from '../../apis/auth';
import {
  onChangeTextInfo,
  toggleCheckBox,
  validationRegisterInfo,
} from './utils';

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

  const mutation = AuthQueries.RegisterQuery();

  const onSubmitRegister: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { email, password, nickname } = registerInfo;
    const isValid = validationRegisterInfo(registerInfo);
    if (isValid.result) {
      //api호출
      mutation.mutate({ email, password, nickname , mbti: null});
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
            <div>
              <label htmlFor="password">비밀번호</label>
              <Svg.InfoIcon size={15} />
            </div>
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
