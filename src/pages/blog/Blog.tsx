import * as S from './style';
import useScrollPosition from '@/hook/useScrollPosition';
import { Header, SideNavigate } from '@/components/Layouts';
import { Suspense } from 'react';
import { Loading } from '@/components';
import MappingBlog from '@/components/Blog/MappingBlog';
import MappingProfile from '@/components/Blog/MappingProfile';

export default function Blog() {
  const { visible } = useScrollPosition();

  return (
    <>
      <Suspense fallback={<Loading.SkeletonUI width="100px" height="20px" />}>
        <Header.BlogHeader visible={visible} />
        <S.Divider />
        <S.ContentsWrapper>
          <SideNavigate.AbleBlogSideNav />
          <S.BlogWrapper>
            <Suspense
              fallback={<Loading.SkeletonUI width="100%" height="100%" />}
            >
              <MappingProfile />
            </Suspense>
            <Suspense
              fallback={<Loading.SkeletonUI width="100%" height="100%" />}
            >
              <MappingBlog />
            </Suspense>
          </S.BlogWrapper>
        </S.ContentsWrapper>
      </Suspense>
    </>
  );
}
