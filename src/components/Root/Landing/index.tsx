import * as S from './style';

export default function Landing() {
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
          <button>시작하기</button>
        </S.IntroLeft>
        <S.IntroRight>
          <img src="images/introImage.jpg" />
        </S.IntroRight>
      </S.IntroWrapper>
    </>
  );
}
