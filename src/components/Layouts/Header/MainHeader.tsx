import * as S from './style';

export default function MainHeader() {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <div>커플이 지정한 아이콘이 들어감</div>
        <h1>커플이 지정한 커플 이름</h1>
      </S.TitleContainer>
      <S.AuthContainer>
        <button>공개글 보기</button>
        <button>설정</button>
      </S.AuthContainer>
    </S.HeaderWrapper>
  );
}
