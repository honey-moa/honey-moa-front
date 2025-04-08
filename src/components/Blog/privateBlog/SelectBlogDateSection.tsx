import { Svg } from '@/components/Svg';
import * as S from '../style';
import { useTheme } from 'styled-components';
import {
  onChangeYearHandler,
  onClickYearPrevAndNextHandler,
  onFilterHandler,
} from '../utils';
import { useFilterPageStore } from '@/store/paginationStore/useFilterPageStore';
import { date } from '@/utils';

export default function SelectBlogDateSection() {
  const theme = useTheme();

  const { year, month, filter, setMonth } = useFilterPageStore();

  return (
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
  );
}
