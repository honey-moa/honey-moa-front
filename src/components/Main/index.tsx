import { Header } from '../Layouts';
import CoupleProfile from './CoupleProfile';
import HoneyList from './HoneyList';
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
          <HoneyList />
        </div>
      </S.ContentsWrapper>
    </>
  );
}
