import { Navigate, Route, Routes } from 'react-router-dom';
import AccessAuth from './AccessAuth';
import { lazy } from 'react';
import RedirectedBlog from '@/components/Blog/RedirectedBlog';

const Root = lazy(() => import('@/pages/root/Root'));
const Blog = lazy(() => import('@/pages/blog/Blog'));
const PublicBlog = lazy(() => import('@/pages/blog/PublicBlog'));
const ChangePassword = lazy(() => import('@/components/Auth/ChangePassword'));
const CreatePost = lazy(() => import('@/components/Blog/create/Post'));
const EditPost = lazy(() => import('@/components/Blog/create/EditBlogPost'));
const BlogPost = lazy(() => import('@/pages/blog/Post'));
const Setting = lazy(() => import('@/components/Setting/Setting'));
const Support = lazy(() => import('@/components/Setting/Support'));
const NotFound = lazy(() => import('@/components/Error/NotFound'));

export default function ValidationRoute() {
  return (
    <Routes>
      {/*비로그인 사용자 접근*/}
      <Route element={<AccessAuth isPrivate={false} />}>
        <Route path="/" element={<Navigate to="/root" />} />
        <Route path="/root" element={<Root />} />
        <Route path="/setting/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/account/change-password/:token/:id"
          element={<ChangePassword />}
        />
      </Route>

      {/*로그인 사용자 접근*/}
      <Route element={<AccessAuth isPrivate={true} />}>
        <Route path="/setting" element={<Setting />} />
        <Route path="/blog" element={<RedirectedBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/public/posts" element={<PublicBlog />} />
        <Route path="/blog/:blogId/post/create" element={<CreatePost />} />
        <Route path="/blog/:blogId/post/:postId/edit" element={<EditPost />} />
        <Route path="/blog/:blogId/post/:honeyId" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}
