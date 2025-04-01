import * as S from './style';
import useScrollPosition from '@/hook/useScrollPosition';
import { Header, SideNavigate } from '@/components/Layouts';
import { Suspense } from 'react';
import { Loading } from '@/components';
import PrivateBlogContents from '@/components/Blog/BlogList/PrivateBlogContents';
import CoupleProfile from '@/components/Blog/Profile/CoupleProfile';

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
            <CoupleProfile />
            <PrivateBlogContents />
          </S.BlogWrapper>
        </S.ContentsWrapper>
      </Suspense>
    </>
  );
}
