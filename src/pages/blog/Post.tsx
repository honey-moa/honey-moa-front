import BlogContents from '@/components/Blog/Post/BlogContents';
import BlogComments from '@/components/Blog/Post/Comments/BlogComments';
import LeftSideNav from '@/components/Blog/Post/LeftSideNav';
import { useTitle } from '@/hook/useTitle';
import { Suspense } from 'react';

export default function Post() {
  useTitle('꿀모아 | 블로그 이야기');
  return (
    <Suspense fallback={<div>이야기 불러오는 중...</div>}>
      <LeftSideNav />
      <BlogContents />
      <BlogComments />
    </Suspense>
  );
}
