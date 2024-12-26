import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

/**
 * 여러 Provider를 한번에 관리하는 컴포넌트
 */
export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>{children}</Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
