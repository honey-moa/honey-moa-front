import * as S from './style';

export default function RootHeader() {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <div>Logo</div>
        <h1>우리들의 이야기 - 꿀모아</h1>
      </S.TitleContainer>
      <S.AuthContainer>
        <button>로그인</button>
        <button>회원가입</button>
      </S.AuthContainer>
    </S.HeaderWrapper>
  );
}
