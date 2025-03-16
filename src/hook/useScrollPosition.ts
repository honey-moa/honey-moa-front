import { useEffect, useState } from 'react';
import useSessionStorage from './useSessionStorage';

interface UseScrollToProps {
  x?: number;
  y?: number;
}

export default function useScrollPosition({
  x = 0,
  y = 0,
}: UseScrollToProps = {}) {
  const { value } = useSessionStorage('__scroll_position_back');

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  useEffect(() => {
    //이전 위치가 존재할 경우, 해당 위치로 이동
    if (value) {
      const [savedX, savedY] = JSON.parse(value);
      window.scrollTo(savedX, savedY);
    } else {
      window.scrollTo(x, y);
    }
  }, [value, x, y]);

  return { visible };
}
