import { useStore } from 'zustand';
import { Svg } from '../Svg';
import * as S from './style';
import { useUserInfoStore } from '@/store/authStore/userInfoStore';
import { useNavigate } from 'react-router-dom';

export default function VerificationEmailModal() {
  const userInfo = useStore(useUserInfoStore);
  const navigate = useNavigate();
  return (
    <>
      <S.ModalWrapper>
        <S.EmailAuthHeader>
          <S.EmailIconContainer>
            <Svg.EmailIcon size={24} />
          </S.EmailIconContainer>
          <h3>이메일 인증</h3>
          <S.SendToEmailP>
            <span>{userInfo.email}</span>로<br />
            인증 메일을 발송했습니다.
          </S.SendToEmailP>
        </S.EmailAuthHeader>
        <S.ExtraInfoDiv>
          <Svg.InfoIcon size={24} />
          <p>
            이메일 인증을 완료하지 않으면 커플 연결 기능을 사용할 수 없습니다.
          </p>
        </S.ExtraInfoDiv>
        <S.EmailAuthBottom>
          <p>이메일이 보이지 않는경우 스팸함을 확인해 보세요.</p>
          <button onClick={() => navigate('/blog')}>확인했습니다</button>
          <button>이메일 재전송</button>
          <p>프로필 설정에서 언제든지 이메일 인증을 진행할 수 있습니다.</p>
        </S.EmailAuthBottom>
      </S.ModalWrapper>
    </>
  );
}
