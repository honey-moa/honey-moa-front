import { useEffect, useCallback } from 'react';
import useSessionStorage from './useSessionStorage';

interface UseScrollToProps {
  x?: number;
  y?: number;
}

export default function useScrollTo({ x = 0, y = 0 }: UseScrollToProps = {}) {
  const { value, set } = useSessionStorage('__scroll_position_back');

  const saveToPosition = useCallback(
    (scrollX = window.scrollX, scrollY = window.scrollY) => {
      set([scrollX, scrollY]);
    },
    [set]
  );

  useEffect(() => {
    //이전 위치가 존재할 경우, 해당 위치로 이동
    if (value) {
      const [savedX, savedY] = JSON.parse(value);
      window.scrollTo(savedX, savedY);
    } else {
      window.scrollTo(x, y);
    }
  }, [value, x, y]);

  return { saveToPosition };
}
