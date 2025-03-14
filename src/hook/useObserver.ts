import { useEffect, useRef } from 'react';

interface InfiniteProps {
  threshold?: number;
  event?: () => void;
}

export default function useObserver({ threshold = 0.1, event }: InfiniteProps) {
  const obsRef = useRef<HTMLDivElement>(null);
  const preventRef = useRef(true); //옵저버 중복 방지

  const handleObs: IntersectionObserverCallback = entries => {
    const target = entries[0];
    if (target.isIntersecting && event) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      event();
    }
  };

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef]);
  return { obsRef };
}
