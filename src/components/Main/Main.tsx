import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';

const connected = true;
// 유저정보에 연결정보 포함된 후 수정
const connectedContents = connected ? (
  <>
    <Profile.CoupleProfile />
    <Contents.HoneyList />
  </>
) : (
  <>
    <Profile.UnConnectedProfile />
    <Contents.UnConnectedList />
  </>
);

export default function Main() {
  return (
    <>
      {connected ? <Header.MainHeader /> : <Header.UnConnectedHeader />}
      <S.ContentsWrapper>
        <SideNavigate />
        <div>{connectedContents}</div>
      </S.ContentsWrapper>
    </>
  );
}
