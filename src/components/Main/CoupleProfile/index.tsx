import * as S from './style';

export default function CoupleProfile() {
  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileBgImage src="images/introImage.jpg" />
        <S.CoupleInfoWrapper>
          <S.EachImageContainer>
            <div>
              <img src="images/introImage.jpg" alt="profile" />
            </div>
            <div>
              <img src="images/introImage.jpg" alt="profile" />
            </div>
          </S.EachImageContainer>
          <S.CoupleShortIntroduction>
            <h2>커플 이름</h2>
            <p>
              "우리 커플을 소개하는 글을 적는 부분입니다. <br />
              과연 어디까지 쓸 수 있을까요? 제한된 글자 수를 지정해야 할 것
              같습니다.
              <br /> 그게 아니면 박스를 벗어나 버릴테니깐요"
            </p>
          </S.CoupleShortIntroduction>
        </S.CoupleInfoWrapper>
      </S.ProfileWrapper>
    </>
  );
}
