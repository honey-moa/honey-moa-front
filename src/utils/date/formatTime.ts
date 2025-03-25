interface formatTimeParams {
  time: Date | string | number;
  formatType?:
    | 'hms' //10:10:10
    | 'hm' //10:10
    | 'm' //10
    | 'ampm' //am 10:10
    | '오전오후'; //오전 10:10
}

/**
 *
 * @param time 시간 입력 string | number | Date
 * @param formatType 시간 포맷 타입
 *
 * @returns
 * - hms: 10:10:10
 * - hm: 10:10
 * - m: 10
 * - ampm: am 10:10
 * - 오전오후: 오전 10:10
 *
 */

export default function formatTime({ time, formatType }: formatTimeParams) {
  const date = new Date(time);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const formattedHour = hour === 0 || hour === 12 ? 12 : hour % 12;

  const timeObj = {
    hms: `${hour}:${minute}:${second}`,
    hm: `${hour}:${minute}`,
    m: `${minute}`,
    ampm: `${hour > 12 ? 'pm' : 'am'} ${formattedHour}:${minute}`,
    오전오후: `${hour > 12 ? '오후' : '오전'} ${formattedHour}:${minute}`,
  };

  return timeObj[formatType || 'hms'];
}
