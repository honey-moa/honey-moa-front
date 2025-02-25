import { useNavigate } from 'react-router-dom';
import * as S from './style';
import useLocalStorage from '@/hook/useLocalStorage';
import { toast } from 'react-toastify';

export default function Landing() {
  const navigate = useNavigate();
  const { value: token } = useLocalStorage('accessToken');
  const handleGoToHoneyJar = () => {
    if (!token || token === '' || token === 'undefined') {
      return toast.error('로그인이 필요합니다.');
    }
    navigate('/blog');
  };

  return (
    <>
      <S.IntroWrapper>
        <S.IntroLeft>
          <h2>
            당신만의 특별한
            <br />
            순간을 기록하세요
          </h2>
          <p>
            소중한 추억을 기록하고 공유하는 공간.
            <br />
            당신의 이야기가 시작되는 곳 입니다.
          </p>
          <button onClick={handleGoToHoneyJar}>시작하기</button>
        </S.IntroLeft>
        <S.IntroRight>
          <img src="images/introImage.jpg" />
        </S.IntroRight>
      </S.IntroWrapper>
    </>
  );
}
