import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <title>꿀모아 | 시작페이지</title>
    <meta name="description" content="꿀모아 | 프라이핏 커플 블로그" />
    <App />
  </StrictMode>
);
