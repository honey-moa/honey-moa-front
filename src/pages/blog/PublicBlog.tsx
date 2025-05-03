import * as S from './style';
import useScrollPosition from '@/hook/useScrollPosition';
import { Suspense } from 'react';
import { Header, SideNavigate } from '@/components/Layouts';
import { Loading } from '@/components';
import PublicBlogList from '@/components/Blog/publicBlog/PublicBlogList';
import { useTitle } from '@/hook/useTitle';

export default function PublicBlog() {
  useTitle('꿀모아 | 블로그 공개글');
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
