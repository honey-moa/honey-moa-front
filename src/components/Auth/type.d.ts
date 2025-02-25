import React from 'react';

export type AuthFunnelStep =
  | '로그인'
  | '회원가입'
  | '비밀번호 찾기'
  | '이메일 인증';

//모달 버튼 클릭 시 함수
export interface SelectModalButton {
  location: AuthFunnelStep;
}

//모달 Props
export interface ModalProps<T> {
  setStep: (step: T) => void;
  redirect?: string;
}

//회원가입 status
export type RegisterInfo = {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  conditions: boolean;
};

export type LoginInfo = {
  email: string;
  password: string;
  isAutoLogin: boolean;
};

export type EmailForChangePwType = {
  email: string;
};
type StepProps = {
  name: string;
  children: ReactNode;
};

//Funnel 컴포넌트의 Props 타입
//ReactNode [] 타입을 받는다.
interface FunnelProps {
  children: ReactNode[];
}

//FunnelComponent  FC<FunnelProps> 타입을 상속받음으로써
// 함수형 컴포넌트임을 알리고 props를  children: ReactNode[]타입 으로 지정
interface FunnelComponent extends FC<FunnelProps> {
  Step: FC<StepProps>;
}

type UseFunnelReturn<T> = {
  setStep: (step: T) => void;
  Funnel: React.FunnelComponent;
  isShow?: boolean;
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>;
  outSideClick?: boolean;
  blur?: boolean;
};
