import * as S from './style';
import { Navigate } from 'react-router-dom';
import { Header, SideNavigate } from '../Layouts';
import { UserQueries } from '@/apis/user';
import { Contents, Profile } from '../Main';
import { BlogQueries } from '@/apis/blog';

export default function Blog() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  if (!getBlogInfo) {
    return <Navigate to="/honeyJar" />;
  }

  return (
    <>
      <Header.BlogHeader blogName={getBlogInfo?.name} />
      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav />
        <div>
          <Profile.CoupleProfile myId={myInfo?.id} />
          <Contents.HoneyList />
        </div>
      </S.ContentsWrapper>
    </>
  );
}
