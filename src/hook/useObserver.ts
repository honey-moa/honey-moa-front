import { useCallback, useEffect, useRef } from 'react';

interface InfiniteProps {
  threshold?: number;
  event?: () => void;
}

export default function useObserver({ threshold = 0.1, event }: InfiniteProps) {
  const obsRef = useRef<HTMLDivElement>(null);
  const preventRef = useRef(true);

  const handleObs: IntersectionObserverCallback = useCallback(
    async entries => {
      const target = entries[0];
      if (preventRef && target.isIntersecting && event) {
        preventRef.current = false;
        await event();
        preventRef.current = true;
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
