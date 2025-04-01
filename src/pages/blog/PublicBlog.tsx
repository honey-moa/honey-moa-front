import * as S from './style';
import useScrollPosition from '@/hook/useScrollPosition';
import { Suspense } from 'react';
import { Header, SideNavigate } from '@/components/Layouts';
import PublicBlogList from '@/components/Blog/BlogList/PublicBlogList';
import { Loading } from '@/components';

export default function PublicBlog() {
  const { visible } = useScrollPosition();

  return (
    <>
      <Header.BlogHeader visible={visible} />
      <S.Divider />

      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav />
        <S.BlogWrapper>
          <Suspense
            fallback={
              <Loading.SkeletonTable width="100%" height="400px" rows={3} />
            }
          >
            <PublicBlogList />
          </Suspense>
        </S.BlogWrapper>
      </S.ContentsWrapper>
    </>
  );
}
