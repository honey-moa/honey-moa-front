import { useEffect, useState } from 'react';

/** `useDebounce` 훅
 *
 * 이 훅은 입력값을 지연시간만큼 지연시킨 후 반환합니다.
 *
 * @template T
 * @param {T} value - 지연시킬 입력값
 * @returns {T} - 지연시킨 입력값
 * @example
 *      const debouncedValue = useDebounce(value, 1000);
 */
export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
