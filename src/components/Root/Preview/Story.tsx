import * as S from './style';

export default function Story() {
  return (
    <S.PreviewDiv>
      <S.PreviewHeader>
        <div>
          <img src="images/previewProfile1.jpg" alt="커플프로필"></img>
        </div>
        <span>커플 이름</span>
      </S.PreviewHeader>
      <S.PreviewContent>
        <div>
          <img src="images/previewImage1.jpg"></img>
        </div>
        <div>
          <h3>행복한 순간들</h3>
          <p>우리만의 특별한 이야기를 기록하고 있어요.</p>
        </div>
      </S.PreviewContent>
    </S.PreviewDiv>
  );
}
