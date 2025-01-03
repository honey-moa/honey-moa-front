import { useState } from 'react';
import * as S from './style';
import HoneyCard from './HoneyCard';

export default function HoneyList() {
  const [nowMonth, setNowMonth] = useState<number>(new Date().getMonth() + 1);

  /**
   * 달 클릭시 변경
   * 추후 url에 해당 값을 저장하는 로직 추가 필요
   */
  const onClickMonth = (month: number) => {
    setNowMonth(month);
  };
  return (
    <S.HoneyListWrapper>
      <S.HoneyListHeader>
        <select>
          <option>비공개 글</option>
          <option>공개 글</option>
        </select>
        <div>
          <span>이전</span>
          <span>{2024}년의 달콤한 기록</span>
          <span>다음</span>
        </div>
      </S.HoneyListHeader>
      <S.HoneyListMonthsContainer>
        <S.HoneyListMonths>
          {Array.from({ length: 12 })
            .map((_, index) => index + 1)
            .map(month => {
              return (
                <S.HoneyMonthItem
                  onClick={() => onClickMonth(month)}
                  isNowMonth={nowMonth === month}
                  key={`${month}월`}
                >
                  {month}월
                </S.HoneyMonthItem>
              );
            })}
        </S.HoneyListMonths>
      </S.HoneyListMonthsContainer>
      <div>
        <h3>{12}월</h3>
        <S.HoneyCardGridContainer>
          <HoneyCard />
          <HoneyCard />
          <HoneyCard />
          <HoneyCard />
          <HoneyCard />
          <HoneyCard />
        </S.HoneyCardGridContainer>
      </div>
    </S.HoneyListWrapper>
  );
}
