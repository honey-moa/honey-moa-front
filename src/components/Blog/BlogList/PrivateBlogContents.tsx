import * as S from './style';
import SelectBlogDateSection from './SelectBlogDateSection';
import PrivateBlogList from './PrivateBlogList';
import { Suspense } from 'react';
import { Loading } from '@/components';

export default function PrivateBlogContents() {
  return (
    <S.BlogListWrapper>
      <SelectBlogDateSection />
      <Suspense
        fallback={
          <Loading.SkeletonTable width="100%" height="400px" rows={3} />
        }
      >
        <PrivateBlogList />
      </Suspense>
    </S.BlogListWrapper>
  );
}
