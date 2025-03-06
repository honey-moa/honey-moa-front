type FormatDateType = {
  date: string | number | Date | undefined;
  formatType:
    | '년월일'
    | '월일'
    | '일'
    | 'YYYY-MM-DD'
    | 'YY-MM-DD'
    | 'YYYY-MM'
    | 'YY-MM'
    | 'YYYY'
    | 'YY'
    | 'MM-DD'
    | 'MM'
    | 'DD';
};

/**
 *
 * @param date 날짜 입력 string | number | Date
 * @param format 날짜 포맷 타입
 *
 *
 * @returns
 * - 년월일: 2025년 09월 14일
 * - 월일: 09월 14일
 * - 일: 14일
 * - YYYY-MM-DD: 2025-09-14
 * - YY-MM-DD: 25-09-14
 * - YYYY-MM: 2025-09
 * - YY-MM: 25-09
 * - YYYY: 2025
 * - YY: 25
 * - MM-DD: 09-14
 * - MM: 09
 * - DD: 14
 */
export default function formatDate({ date, formatType }: FormatDateType) {
  let newDate = new Date(date ? date : new Date());
  if (typeof date === 'number') {
    newDate = new Date(`2025-${date}-01`);
  }

  const year = newDate.getFullYear().toString();
  const monthTemp = newDate.getMonth() + 1;
  const dayTemp = newDate.getDate();

  const month = monthTemp < 10 ? `0${monthTemp}` : monthTemp.toString();
  const day = dayTemp < 10 ? `0${dayTemp}` : dayTemp.toString();

  const monthObj = {
    년월일: `${year}년 ${month}월 ${day}일`,
    월일: `${month}월 ${day}일`,
    일: `${day}일`,
    'YYYY-MM-DD': `${year}-${month}-${day}`,
    'YY-MM-DD': `${year.toString().slice(2)}-${month}-${day}`,
    'YYYY-MM': `${year}-${month}`,
    'YY-MM': `${year.toString().slice(2)}-${month}`,
    YYYY: `${year}`,
    YY: `${year.toString().slice(2)}`,
    'MM-DD': `${month}-${day}`,
    MM: `${month}`,
    DD: `${day}`,
  } as const;
  return monthObj[formatType];
}
