import Modal from '../Modal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import SendEmailForChangePasswordModal from './SendEmailForChangePasswordModal';
import VerificationEmailModal from './VerificationEmailModal';
import { AuthFunnelStep, UseFunnelReturn } from './type';

export function AuthFunnelModal({
  Funnel,
  setStep,
  isShow,
  setIsShow,
  outSideClick = true,
}: UseFunnelReturn<AuthFunnelStep>) {
  return (
    <Modal
      blur={true}
      isShow={isShow}
      setIsShow={setIsShow}
      shouldCloseToClickOutside={outSideClick}
    >
      <Funnel>
        <Funnel.Step name="로그인">
          <LoginModal setStep={setStep} />
        </Funnel.Step>
        <Funnel.Step name="회원가입">
          <RegisterModal setStep={setStep} />
        </Funnel.Step>
        <Funnel.Step name="비밀번호 찾기">
          <SendEmailForChangePasswordModal
            setStep={setStep}
            redirect="로그인"
          />
        </Funnel.Step>
        <Funnel.Step name="이메일 인증">
          <VerificationEmailModal />
        </Funnel.Step>
      </Funnel>
    </Modal>
  );
}
