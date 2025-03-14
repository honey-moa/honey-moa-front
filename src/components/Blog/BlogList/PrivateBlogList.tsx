import { Svg } from '@/components/Svg';
import * as S from './style';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { useTheme } from 'styled-components';
import { useMemo } from 'react';
import { date } from '@/utils';
import { GetPrivateBlogPaginationQuery } from '@/apis/blog/queries';
import { Link } from 'react-router-dom';
import useObserver from '@/hook/useObserver';
import { useFilterPageStore } from '@/store/paginationStore/useFilterPageStore';
import {
  onChangeYearHandler,
  onClickYearPrevAndNextHandler,
  onFilterHandler,
} from './utils';

export default function PrivateBlogList({ id }: { id: string }) {
  const theme = useTheme();

  const { year, month, filter, setMonth } = useFilterPageStore();

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
      <S.BlogListHeaderWrapper>
        <div>
          <S.BlogListFilterSelect onChange={onFilterHandler} value={filter}>
            <option value="all">전체</option>
            <option value="public">공개글</option>
          </S.BlogListFilterSelect>
          <S.BlogSelectYearButtonWrapper>
            <button onClick={() => onClickYearPrevAndNextHandler('prev')}>
              <Svg.PrevIcon color={theme.text.primary} />
            </button>
            <span>
              <input
                type="date"
                id="selectYear"
                onChange={onChangeYearHandler}
                placeholder={year}
              />
              년 의 달콤한 이야기
            </span>
            <button onClick={() => onClickYearPrevAndNextHandler('next')}>
              <Svg.NextIcon color={theme.text.primary} />
            </button>
          </S.BlogSelectYearButtonWrapper>
        </div>
        <div>
          {Array.from({ length: 12 }, (_, i) => (
            <S.BlogSelectMonthButton
              key={`${i + 1}-month-filter`}
              $isSelectedMonth={
                month ===
                date.getFormattingDate({ date: i + 1, formatType: 'MM' })
              }
              onClick={() =>
                setMonth(
                  date.getFormattingDate({ date: i + 1, formatType: 'MM' })
                )
              }
            >
              {i + 1} 월
            </S.BlogSelectMonthButton>
          ))}
        </div>
      </S.BlogListHeaderWrapper>
      <S.BlogSelectMonthSpan>{1}월</S.BlogSelectMonthSpan>
      {getBlogInfo?.data?.pages[0].contents.length !== 0 ? (
        <S.BlogListPaginationWrapper>
          {getBlogInfo?.isPlaceholderData && (
            <>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
            </>
          )}
          {getBlogInfo?.isRefetching && (
            <>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
              <S.HoneyCardSkeletonWrapper></S.HoneyCardSkeletonWrapper>
            </>
          )}
          {!getBlogInfo?.isPlaceholderData &&
            !getBlogInfo?.isRefetching &&
            getBlogInfo?.isSuccess &&
            flattenedContents.map(blog => {
              return <BlogListEachHoneyCard {...blog} key={blog.id} />;
            })}
          {getBlogInfo?.isFetching && (
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
          <Link to={`/blog/${id}/post/create`}>
            <span>👉달콤한 이야기 추가하기👈</span>
          </Link>
        </S.NoBlogPleaseAddToBlogWrapper>
      )}
      <S.ListObserver ref={obsRef}></S.ListObserver>
    </S.BlogListWrapper>
  );
}
