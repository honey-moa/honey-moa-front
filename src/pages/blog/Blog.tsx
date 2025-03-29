import * as S from './style';
import { Navigate } from 'react-router-dom';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import PrivateBlogList from '@/components/Blog/BlogList/PrivateBlogList';
import useScrollPosition from '@/hook/useScrollPosition';
import { GetMyInfoReturn } from '@/apis/user/type';
import { BlogSingleInfoReturn } from '@/apis/blog/type';
import { Header, Profile, SideNavigate } from '@/components/Layouts';
import { Suspense } from 'react';

export default function Blog() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const { visible } = useScrollPosition();

  const isTypeGuardId = <T extends object>(
    obj: T
  ): obj is T & { id: string } => {
    return 'id' in obj && typeof obj.id === 'string';
  };

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
      <S.Divider />

      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav blogId={getBlogInfo.id} />
        <S.BlogWrapper>
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <Profile.CoupleProfile
                myId={isTypeGuardId<GetMyInfoReturn>(myInfo!) ? myInfo.id : ''}
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateBlogList
                id={
                  isTypeGuardId<BlogSingleInfoReturn>(getBlogInfo)
                    ? getBlogInfo.id
                    : ''
                }
              />
            </Suspense>
          </>
        </S.BlogWrapper>
      </S.ContentsWrapper>
    </>
  );
}
