import { Svg } from '../../Svg';
import * as S from './style';

export default function MainHeader() {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <div>커플이 지정한 아이콘이 들어감</div>
        <h1>커플이 지정한 커플 이름</h1>
      </S.TitleContainer>
      <S.SettingContainer>
        <button>공개글 보기</button>
        <button>
          <Svg.SettingIcon size={36} />
        </button>
      </S.SettingContainer>
    </S.HeaderWrapper>
  );
}
