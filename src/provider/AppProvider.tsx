import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppProviderProps } from './type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Error } from '@/components';
import { ToastContainer } from 'react-toastify';
import { Suspense, useState } from 'react';
import * as Chat from '@/components/Chat';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError: true,
    },
  },
});

/**
 * 여러 Provider를 한번에 관리하는 컴포넌트
 */
export default function AppProvider({ children }: AppProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Suspense fallback={<div>페이지 들어가는 중...</div>}>
      <QueryClientProvider client={queryClient}>
        <Error.ErrorBoundary>
          <BrowserRouter>
            <ToastContainer position="bottom-left" />
            <>{children}</>
            <Chat.ChatBox setIsOpen={setIsOpen} isOpen={isOpen} />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </Error.ErrorBoundary>
      </QueryClientProvider>
    </Suspense>
  );
}
