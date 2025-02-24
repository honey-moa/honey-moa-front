import * as S from './style';
import { Navigate } from 'react-router-dom';
import { Header, Profile, SideNavigate } from '../Layouts';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import PrivateBlogList from './BlogList/PrivateBlogList';

export default function Blog() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  if (!getBlogInfo) {
    return <Navigate to="/blog" />;
  }

  return (
    <>
      <Header.BlogHeader blogName={getBlogInfo?.name} />
      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav />
        <S.BlogWrapper>
          <Profile.CoupleProfile myId={myInfo?.id} />
          <PrivateBlogList id={getBlogInfo.id} />
        </S.BlogWrapper>
      </S.ContentsWrapper>
    </>
  );
}
