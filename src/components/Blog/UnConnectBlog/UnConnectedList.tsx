import { Svg } from '@/components/Svg';
import * as S from './style';
import { date } from '@/utils';

export default function UnConnectedList() {
  const year = date.getNowDate.year;

  return (
    <S.UnConnectedWrapper>
      <S.UnConnectedHeader>
        <select disabled>
          <option>비공개 글</option>
          <option>공개 글</option>
        </select>
        <div>
          <button disabled>
            <Svg.PrevIcon />
          </button>
          <span>{year}년 기록 시작하기</span>
          <button disabled>
            <Svg.NextIcon />
          </button>
        </div>
      </S.UnConnectedHeader>
      <S.UnConnectedContentsWrapper>
        <Svg.LockIcon size={48} />
        <p>연인과 열결하고 첫 번째 추억을 기록해보세요</p>
      </S.UnConnectedContentsWrapper>
    </S.UnConnectedWrapper>
  );
}
