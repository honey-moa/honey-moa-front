import BlogContents from '@/components/Blog/Post/BlogContents';
import BlogComments from '@/components/Blog/Post/Comments/BlogComments';
import LeftSideNav from '@/components/Blog/Post/LeftSideNav';
import { Suspense } from 'react';

export default function Post() {
  return (
    <Suspense fallback={<div>이야기 불러오는 중...</div>}>
      <LeftSideNav />
      <BlogContents />
      <BlogComments />
    </Suspense>
  );
}
