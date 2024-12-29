import { Header } from '../Layouts';
import CoupleProfile from './CoupleProfile';
import SideNavigate from './SideNavigate';
import * as S from './style';

export default function Main() {
  return (
    <>
      <Header.MainHeader />
      <S.ContentsWrapper>
        <SideNavigate />
        <div>
          <CoupleProfile />
        </div>
      </S.ContentsWrapper>
    </>
  );
}
