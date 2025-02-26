import { Svg } from '@/components/Svg';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function UnConnectedHeader() {
  return (
    <S.HeaderWrapper>
      <S.UnConnectedTitleContainer>
        <Svg.UnConnectedIcon size={24} />
        <h1>커플 연결이 필요합니다</h1>
      </S.UnConnectedTitleContainer>
      <S.SettingContainer>
        <Link to="/public/posts">
          <button>공개글 보기</button>
        </Link>
        <Link to="/setting">
          <button>
            <Svg.SettingIcon size={36} />
          </button>
        </Link>
      </S.SettingContainer>
    </S.HeaderWrapper>
  );
}
