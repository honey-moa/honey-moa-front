import * as S from './style';
import { Navigate } from 'react-router-dom';
import { Header, Profile, SideNavigate } from '../Layouts';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import PrivateBlogList from './BlogList/PrivateBlogList';
import useScrollPosition from '@/hook/useScrollPosition';
import PublicBlogList from './BlogList/PublicBlogList';

export default function Blog({ type }: { type: 'public' | 'private' }) {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const { visible } = useScrollPosition();

  if (!getBlogInfo) {
    return <Navigate to="/blog" />;
  }

  return (
    <>
      <Header.BlogHeader
        blogName={getBlogInfo?.name}
        blogId={getBlogInfo.id}
        visible={visible}
      />
      <div style={{ height: '100px' }}></div>

      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav blogId={getBlogInfo.id} />
        <S.BlogWrapper>
          {type === 'private' ? (
            <>
              <Profile.CoupleProfile myId={myInfo?.id} />
              <PrivateBlogList id={getBlogInfo.id} />
            </>
          ) : (
            <PublicBlogList />
          )}
        </S.BlogWrapper>
      </S.ContentsWrapper>
    </>
  );
}
