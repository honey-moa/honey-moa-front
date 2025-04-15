import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppProviderProps } from './type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Error } from '@/components';
import { ToastContainer } from 'react-toastify';
import { Suspense, useState } from 'react';

/**
 * 여러 Provider를 한번에 관리하는 컴포넌트
 */
export default function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Error.ErrorBoundary>
        <BrowserRouter>
          <ToastContainer position="bottom-left" />
          <Suspense fallback={<div>페이지 들어가는 중...</div>}>
            <>{children}</>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </Error.ErrorBoundary>
    </QueryClientProvider>
  );
}
