import { useLayoutEffect } from 'react';
import useSessionStorage from './useSessionStorage';

interface useScrollToProps {
  key: string;
}

export default function useScrollTo({ key }: useScrollToProps) {
  const { value, set } = useSessionStorage(key);

  const saveToPosition = () => {
    const backState = JSON.stringify([window.scrollX, window.scrollY]);
    set(backState);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    //이전 위치가 존재할 경우, 해당 위치로 이동
    if (value) {
      const [x, y] = JSON.parse(value);
      window.scrollTo(x, y);
    }
  }, []);

  return { saveToPosition };
}
