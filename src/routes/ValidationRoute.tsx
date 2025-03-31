import { Navigate, Route, Routes } from 'react-router-dom';
import AccessAuth from './AccessAuth';
import { lazy } from 'react';

const Root = lazy(() => import('@/pages/root/Root'));
const SingleBlog = lazy(() => import('@/components/Main/Main'));
const Blog = lazy(() => import('@/pages/blog/Blog'));
const PublicBlog = lazy(() => import('@/pages/blog/PublicBlog'));
const ChangePassword = lazy(() => import('@/components/Auth/ChangePassword'));
const CreatePost = lazy(() => import('@/components/Blog/Post/Post'));
const EditPost = lazy(() => import('@/components/Blog/Post/EditBlogPost'));
const BlogPost = lazy(() => import('@/pages/blog/Post'));
const Setting = lazy(() => import('@/components/Setting/Setting'));
const Support = lazy(() => import('@/components/Setting/Support'));
const Chat = lazy(() => import('@/components/Chat/ChatPage'));
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
        <Route path="/blog" element={<SingleBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/public/posts" element={<PublicBlog />} />
        <Route path="/blog/:blogId/post/create" element={<CreatePost />} />
        <Route path="/blog/:blogId/post/:postId/edit" element={<EditPost />} />
        <Route path="/blog/:blogId/post/:honeyId" element={<BlogPost />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}
