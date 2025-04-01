import * as S from './style';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import useObserver from '@/hook/useObserver';
import useScrollPosition from '@/hook/useScrollPosition';
import CustomLink from '@/components/common/CustomLink';
import { Loading } from '@/components';

export default function PublicBlogList() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  useScrollPosition();

  const getPublicBlogList = BlogQueries.GetPublicBlogPaginationQuery({});
  const { obsRef } = useObserver({
    threshold: 0.1,
    event: getPublicBlogList?.fetchNextPage,
  });

  const flattenedContents =
    getPublicBlogList?.data?.pages.flatMap(page => page.contents) || [];

  return (
    <>
      <S.PublicBlogPostTitle>공개글</S.PublicBlogPostTitle>
      {getPublicBlogList?.data?.pages[0].contents.length !== 0 ? (
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
      {getPublicBlogList?.isFetchingNextPage && (
        <Loading.SkeletonTable width="100%" height="300px" rows={2} />
      )}
      <S.ListObserver ref={obsRef}></S.ListObserver>
    </>
  );
}
