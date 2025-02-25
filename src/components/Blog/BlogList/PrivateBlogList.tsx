import { Svg } from '@/components/Svg';
import * as S from './style';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { useTheme } from 'styled-components';
import { useEffect, useMemo, useRef, useState } from 'react';
import { date } from '@/utils';
import { GetPrivateBlogPaginationQuery } from '@/apis/blog/queries';
import { Link } from 'react-router-dom';

export default function PrivateBlogList({ id }: { id: string }) {
  const theme = useTheme();

  const [selectFilter, setSelectFilter] = useState({
    year: date.getNowDate.year,
    month: date.getNowDate.month,
    filter: 'all',
  });

  const obsRef = useRef<HTMLDivElement>(null);
  const preventRef = useRef(true); //옵저버 중복 방지

  const getBlogFilter = useMemo(
    () => ({
      id: id,
      datePeriod: `${selectFilter.year}-${selectFilter.month}`,
      showPrivatePosts: selectFilter.filter === 'all',
    }),
    [id, selectFilter.year, selectFilter.month, selectFilter.filter]
  );

  const getBlogInfo = GetPrivateBlogPaginationQuery(getBlogFilter);

  const onFilterHandler: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const value = e.target.value;
    console.log(value);
    setSelectFilter(prev => ({ ...prev, filter: value }));
  };

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
      getBlogInfo?.fetchNextPage();
    }
  };

  const onClickMonthHandler = (month: string) => {
    setSelectFilter(prev => ({ ...prev, month }));
  };

  const onClickYearPrevAndNextHandler = (location: 'prev' | 'next') => {
    const date = new Date(`${selectFilter.year}-${selectFilter.month}-01`);
    if (location === 'prev') {
      date.setFullYear(date.getFullYear() - 1);
    } else {
      date.setFullYear(date.getFullYear() + 1);
    }
    setSelectFilter(prev => {
      return {
        ...prev,
        year: date.getFullYear().toString(),
      };
    });
  };

  const flattenedContents =
    getBlogInfo?.data?.pages.flatMap(page => page.contents) || [];

  const onChangeYearHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    const newDate = new Date(e.target.value);
    setSelectFilter(prev => ({
      ...prev,
      year: newDate.getFullYear().toString(),
      month: date.getFormattingDate({
        date: newDate.getMonth() + 1,
        formatType: 'MM',
      }),
    }));
  };

  return (
    <S.BlogListWrapper>
      <S.BlogListHeaderWrapper>
        <div>
          <S.BlogListFilterSelect
            onChange={onFilterHandler}
            value={selectFilter.filter}
          >
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
                placeholder={selectFilter.year}
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
                selectFilter.month ===
                date.getFormattingDate({ date: i + 1, formatType: 'MM' })
              }
              onClick={() =>
                onClickMonthHandler(
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
          <Link to={`/new/${id}/post`}>
            <span>👉달콤한 이야기 추가하기👈</span>
          </Link>
        </S.NoBlogPleaseAddToBlogWrapper>
      )}
      <S.ListObserver ref={obsRef}></S.ListObserver>
    </S.BlogListWrapper>
  );
}
