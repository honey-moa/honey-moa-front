import * as S from './style';
import Image from '../Image';
import { AuthFunnelStep, ModalProps, RegisterInfo } from './type';
import { useEffect, useState } from 'react';
import { Svg } from '../Svg';
import { AuthQueries } from '@/apis/auth';
import { validationRegisterInfo } from './utils';
import { useStore } from 'zustand';
import { useUserInfoStore } from '@/store/authStore/userInfoStore';
import { Loading, PopUp } from '@/components';
import { RegisterErrorHandler } from '@/apis/auth/error';
import { changeInfo } from '@/utils';
import { toast } from 'react-toastify';

export default function RegisterModal({ setStep }: ModalProps<AuthFunnelStep>) {
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    conditions: false,
  });

  const userInfo = useStore(useUserInfoStore);

  const onChangeRegisterInfo = changeInfo.text<RegisterInfo>({
    setState: setRegisterInfo,
  });

  const toggleConditions = changeInfo.toggle<RegisterInfo>({
    setState: setRegisterInfo,
    key: 'conditions',
  });

  const mutationRegister = AuthQueries.useRegisterQuery();
  const mutationLogin = AuthQueries.useLoginQuery();

  const onSubmitRegister: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { email, password, nickname } = registerInfo;
    const isValid = validationRegisterInfo(registerInfo);
    if (isValid.result) {
      //api호출
      mutationRegister.mutate(
        { email, password, nickname, mbti: null },
        {
          onSuccess: () => {
            setStep('이메일 인증');
            mutationLogin.mutate({ email, password });
          },
          onError: error => {
            toast.error(RegisterErrorHandler(error));
          },
        }
      );
    } else {
      toast.error(isValid.message);
    }
  };

  useEffect(() => {
    userInfo.setEmail(registerInfo.email);
  }, [registerInfo.email]);

  return (
    <>
      <S.ModalWrapper>
        <S.ModalHeader>
          <Image
            src="images/siteLogo.jpg"
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
              <PopUp.Tooltip
                message="이메일 형식에 맞게 입력해주세요. (ex abc@gmail.com)"
                direction="top"
              >
                <Svg.InfoIcon size={15} />
              </PopUp.Tooltip>
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
              <PopUp.Tooltip
                message="비밀번호는 8자 이상 15자 이하, 영문(대/소), 숫자, 특수문자를 포함해야 합니다."
                direction="top"
              >
                <Svg.InfoIcon size={15} />
              </PopUp.Tooltip>
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
          <S.SubmitButton type="submit">
            {mutationRegister.isPending ? <Loading.Spinner /> : <>회원가입</>}
          </S.SubmitButton>
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
