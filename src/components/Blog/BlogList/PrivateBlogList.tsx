import { Svg } from '@/components/Svg';
import * as S from './style';
import { BlogQueries } from '@/apis/blog';
import { BlogListEachHoneyCard } from './BlogListEachHoneyCard';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { date } from '@/utils';

export default function PrivateBlogList({ id }: { id: string }) {
  const [selectDate, setSelectDate] = useState({
    year: date.getNowDate.year,
    month: date.getNowDate.month,
  });
  const theme = useTheme();
  const getBlogList = BlogQueries.GetPrivateBlogPaginationQuery({
    id,
    datePeriod: `${selectDate.year}-${selectDate.month}`,
  });

  const onClickMonthHandler = (month: string) => {
    setSelectDate(prev => ({ ...prev, month }));
  };

  const onClickYearPrevAndNextHandler = (location: 'prev' | 'next') => {
    const date = new Date(`${selectDate.year}-${selectDate.month}-01`);
    if (location === 'prev') {
      date.setFullYear(date.getFullYear() - 1);
    } else {
      date.setFullYear(date.getFullYear() + 1);
    }
    setSelectDate(prev => {
      return {
        ...prev,
        year: date.getFullYear().toString(),
      };
    });
  };

  const onChangeYearHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    const newDate = new Date(e.target.value);
    setSelectDate({
      year: newDate.getFullYear().toString(),
      month: date.getDateString({ date: newDate.getMonth() + 1, type: 'MM' }),
    });
  };

  return (
    <S.BlogListWrapper>
      <S.BlogListHeaderWrapper>
        <div>
          <div>콤보박스</div>
          <S.BlogSelectYearButtonWrapper>
            <button onClick={() => onClickYearPrevAndNextHandler('prev')}>
              <Svg.PrevIcon color={theme.text.primary} />
            </button>
            <span>
              <input
                type="date"
                id="selectYear"
                onChange={onChangeYearHandler}
                placeholder={selectDate.year}
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
                selectDate.month ===
                date.getDateString({ date: i + 1, type: 'MM' })
              }
              onClick={() =>
                onClickMonthHandler(
                  date.getDateString({ date: i + 1, type: 'MM' })
                )
              }
            >
              {i + 1} 월
            </S.BlogSelectMonthButton>
          ))}
        </div>
      </S.BlogListHeaderWrapper>
      <S.BlogSelectMonthSpan>{1}월</S.BlogSelectMonthSpan>
      {getBlogList?.totalCount ? (
        <S.BlogListPaginationWrapper>
          {getBlogList.contents.map(blog => {
            return <BlogListEachHoneyCard {...blog} key={blog.id} />;
          })}
        </S.BlogListPaginationWrapper>
      ) : (
        <div>아직 이야기가 존재하지 않습니다.</div>
      )}
    </S.BlogListWrapper>
  );
}
