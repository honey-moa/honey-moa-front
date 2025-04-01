import * as S from './style';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { useMemo } from 'react';
import { GetPrivateBlogPaginationQuery } from '@/apis/blog/queries';
import useObserver from '@/hook/useObserver';
import { useFilterPageStore } from '@/store/paginationStore/useFilterPageStore';
import useScrollPosition from '@/hook/useScrollPosition';
import CustomLink from '@/components/common/CustomLink';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import { Loading } from '@/components';

export default function PrivateBlogList() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const { year, month, filter } = useFilterPageStore();

  useScrollPosition();

  const getBlogFilter = useMemo(
    () => ({
      id: getBlogInfo?.id,
      datePeriod: `${year}-${month}`,
      showPrivatePosts: filter === 'all',
    }),
    [getBlogInfo?.id, year, month, filter]
  );
  const getBlogList = GetPrivateBlogPaginationQuery(getBlogFilter);
  const { obsRef } = useObserver({
    event: getBlogList?.fetchNextPage,
    threshold: 0.1,
  });

  const flattenedContents =
    getBlogList?.data?.pages.flatMap(page => page.contents) || [];

  return (
    <>
      {getBlogList?.data?.pages[0].contents.length !== 0 ? (
        <S.BlogListPaginationWrapper>
          {flattenedContents.map(blog => {
            return <BlogListEachHoneyCard {...blog} key={blog.id} />;
          })}
        </S.BlogListPaginationWrapper>
      ) : (
        <S.NoBlogPleaseAddToBlogWrapper>
          <span>아직 달콤한 이야기가 존재하지 않습니다😭</span>
          <CustomLink to={`/blog/${getBlogInfo?.id}/post/create`}>
            <span>👉달콤한 이야기 추가하기👈</span>
          </CustomLink>
        </S.NoBlogPleaseAddToBlogWrapper>
      )}
      {getBlogList?.isFetchingNextPage && (
        <Loading.SkeletonTable width="100%" height="300px" rows={2} />
      )}
      <S.ListObserver ref={obsRef}></S.ListObserver>
    </>
  );
}
