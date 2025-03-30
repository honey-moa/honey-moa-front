import * as S from './style';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { Suspense, useMemo } from 'react';
import { GetPrivateBlogPaginationQuery } from '@/apis/blog/queries';
import useObserver from '@/hook/useObserver';
import { useFilterPageStore } from '@/store/paginationStore/useFilterPageStore';
import SelectBlogDateSection from './SelectBlogDateSection';
import useScrollPosition from '@/hook/useScrollPosition';
import CustomLink from '@/components/common/CustomLink';
import { Loading } from '@/components';

export default function PrivateBlogList({ id }: { id: string }) {
  const { year, month, filter } = useFilterPageStore();

  useScrollPosition();

  const getBlogFilter = useMemo(
    () => ({
      id: id,
      datePeriod: `${year}-${month}`,
      showPrivatePosts: filter === 'all',
    }),
    [id, year, month, filter]
  );
  const getBlogInfo = GetPrivateBlogPaginationQuery(getBlogFilter);
  const { obsRef } = useObserver({
    event: getBlogInfo?.fetchNextPage,
    threshold: 0.1,
  });

  const flattenedContents =
    getBlogInfo?.data?.pages.flatMap(page => page.contents) || [];

  return (
    <S.BlogListWrapper>
      <SelectBlogDateSection />
      <S.BlogSelectMonthSpan>{1}월</S.BlogSelectMonthSpan>
      <Suspense
        fallback={<Loading.SkeletonTable width="400px" height="400px" />}
      >
        {getBlogInfo?.data?.pages[0].contents.length !== 0 ? (
          <S.BlogListPaginationWrapper>
            {flattenedContents.map(blog => {
              return <BlogListEachHoneyCard {...blog} key={blog.id} />;
            })}
          </S.BlogListPaginationWrapper>
        ) : (
          <S.NoBlogPleaseAddToBlogWrapper>
            <span>아직 달콯한 이야기가 존재하지 않습니다😭</span>
            <CustomLink to={`/blog/${id}/post/create`}>
              <span>👉달콤한 이야기 추가하기👈</span>
            </CustomLink>
          </S.NoBlogPleaseAddToBlogWrapper>
        )}
      </Suspense>
      <S.ListObserver ref={obsRef}></S.ListObserver>
    </S.BlogListWrapper>
  );
}
