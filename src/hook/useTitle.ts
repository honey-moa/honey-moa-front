import { useEffect } from 'react';

export const useTitle = (initialTitle?: string | undefined): void => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = initialTitle ?? '꿀모아 | 시작페이지';

    return () => {
      document.title = prevTitle;
    };
  }, [initialTitle]);
};
