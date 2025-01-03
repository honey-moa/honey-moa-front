//보달 버튼 클릭 시 함수
export interface SelectModalButton {
  location: '로그인' | '회원가입';
}

//모달 Props
export interface ModalProps {
  setStep: (step: '로그인' | '회원가입') => void;
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
