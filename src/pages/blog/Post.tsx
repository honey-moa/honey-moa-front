import BlogContents from '@/components/Blog/Honey/BlogContents';
import BlogComments from '@/components/Blog/Honey/Comments/BlogComments';
import LeftSideNav from '@/components/Blog/Honey/LeftSideNav';
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
