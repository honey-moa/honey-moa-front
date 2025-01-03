export interface SelectModalButton {
  location: '로그인' | '회원가입';
}

export interface ModalProps {
  setStep: (step: '로그인' | '회원가입') => void;
}
