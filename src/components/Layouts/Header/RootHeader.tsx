import { Auth } from '../..';
import * as S from './style';

export default function RootHeader() {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <div>Logo</div>
        <h1>우리들의 이야기 - 꿀모아</h1>
      </S.TitleContainer>
      <S.AuthContainer>
        <Auth.Login />
        <Auth.Register />
      </S.AuthContainer>
    </S.HeaderWrapper>
  );
}
