import { useCallback, useEffect, useRef } from 'react';

interface InfiniteProps {
  threshold?: number;
  event?: () => void;
}

export default function useObserver({ threshold = 0.1, event }: InfiniteProps) {
  const obsRef = useRef<HTMLDivElement>(null);

  const handleObs: IntersectionObserverCallback = useCallback(
    entries => {
      const target = entries[0];
      if (target.isIntersecting && event) {
        event();
      }
    },
    [event]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => observer.disconnect();
  }, [handleObs, threshold]);

  return { obsRef };
}
