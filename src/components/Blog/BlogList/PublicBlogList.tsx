import * as S from './style';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Header, SideNavigate } from '@/components/Layouts';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { Link } from 'react-router-dom';
import useObserver from '@/hook/useObserver';
import useScrollTo from '@/hook/useScrollTo';

export default function PublicBlogList() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);
  useScrollTo({});

  const getPublicBlogList = BlogQueries.GetPublicBlogPaginationQuery({});
  const { obsRef } = useObserver({
    threshold: 0.1,
    event: getPublicBlogList?.fetchNextPage,
  });

  const flattenedContents =
    getPublicBlogList?.data?.pages.flatMap(page => page.contents) || [];

  return (
    <>
      <Header.BlogHeader
        blogId={getBlogInfo?.id}
        blogName={getBlogInfo?.name}
      />
      <S.PublicContentsWrapper>
        <SideNavigate.AbleBlogSideNav blogId={getBlogInfo?.id} />
        <S.PublicPaginationWrapper>
          {getPublicBlogList?.data?.pages[0].contents.length !== 0 ? (
            <S.BlogListPaginationWrapper>
              {getPublicBlogList?.isPlaceholderData && (
                <>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                </>
              )}
              {getPublicBlogList?.isRefetching && (
                <>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                </>
              )}
              {!getPublicBlogList?.isPlaceholderData &&
                !getPublicBlogList?.isRefetching &&
                getPublicBlogList?.isSuccess &&
                flattenedContents.map(blog => {
                  return <BlogListEachHoneyCard {...blog} key={blog.id} />;
                })}
              {getPublicBlogList?.isFetching && (
                <>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                  <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
                </>
              )}
            </S.BlogListPaginationWrapper>
          ) : (
            <S.NoBlogPleaseAddToBlogWrapper>
              <span>아직 달콯한 이야기가 존재하지 않습니다😭</span>
              <Link to={`/blog/${getBlogInfo?.id}/post/create`}>
                <span>👉달콤한 이야기 추가하기👈</span>
              </Link>
            </S.NoBlogPleaseAddToBlogWrapper>
          )}
          <S.ListObserver ref={obsRef}></S.ListObserver>
        </S.PublicPaginationWrapper>
      </S.PublicContentsWrapper>
      <S.ListObserver ref={obsRef}></S.ListObserver>
    </>
  );
}
