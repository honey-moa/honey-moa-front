import { Link } from 'react-router-dom';
import Auth from '../../Auth';
import * as S from './style';
import Image from '@/components/Image';

export default function RootHeader() {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <Link to={`/root`}>
          <Image
            src={'/images/siteLogo.jpg'}
            width="65px"
            height="65px"
            borderRadius="50%"
          />
        </Link>
        <h1>우리들의 이야기 - 꿀모아</h1>
      </S.TitleContainer>
      <S.AuthContainer>
        <Auth />
      </S.AuthContainer>
    </S.HeaderWrapper>
  );
}
