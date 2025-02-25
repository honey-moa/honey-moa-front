import * as S from './style';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Header, SideNavigate } from '@/components/Layouts';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function PublicBlogList() {
  const obsRef = useRef<HTMLDivElement>(null);
  const preventRef = useRef(true); //옵저버 중복 방지

  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const getPublicBlogList = BlogQueries.GetPublicBlogPaginationQuery({});

  const flattenedContents =
    getPublicBlogList?.data?.pages.flatMap(page => page.contents) || [];

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.1 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef]);

  const handleObs: IntersectionObserverCallback = entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      getPublicBlogList?.fetchNextPage();
    }
  };

  return (
    <>
      <Header.PublicBlogHeader blogId={getBlogInfo?.id} />
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
              <Link to={`/new/${getBlogInfo?.id}/post`}>
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
