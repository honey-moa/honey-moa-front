import { Error, Setting } from '@/components';
import ChangePassword from '@/components/Auth/ChangePassword';
import { Main } from '@/components/Main';
import { Post } from '@/components/Blog/Post';
import Root from '@/components/Root';
import * as Chat from '@/components/Chat';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AccessAuth from './AccessAuth';
import { RouteListType } from './type';
import Blog from '@/components/Blog/Blog';
import { Honey } from '@/components/Blog/Honey';
import EditBlogPost from '@/components/Blog/Post/EditBlogPost';

const routesList: RouteListType[] = [
  {
    id: 'route--root',
    path: '/root',
    private: false,
    element: <Root />,
  },
  {
    id: 'route--honeyJar',
    path: '/blog',
    private: true,
    element: <Main />,
  },
  {
    id: 'route--honeyJar--id',
    path: '/blog/:id',
    private: true,
    element: <Blog type="private" />,
  },
  {
    id: 'route--changePassword',
    path: '/account/change-password/:token/:id',
    private: false,
    element: <ChangePassword />,
  },
  {
    id: 'route--post',
    path: '/blog/:blogId/post/create',
    private: true,
    element: <Post />,
  },
  {
    id: 'route--post--edit',
    path: '/blog/:blogId/post/:postId/edit',
    private: true,
    element: <EditBlogPost />,
  },
  {
    id: 'route--honey',
    path: '/blog/:blogId/post/:honeyId',
    private: true,
    element: <Honey />,
  },
  {
    id: 'route--public-honey',
    path: '/public/posts',
    private: false,
    element: <Blog type="public" />,
  },
  {
    id: 'route--setting',
    path: '/setting',
    private: true,
    element: <Setting.Main />,
  },
  {
    id: 'route--setting-support',
    path: '/setting/support',
    private: false,
    element: <Setting.Support />,
  },
  {
    id: 'route--chat',
    path: '/chat',
    private: true,
    element: <Chat.ChatPage />,
  },
  {
    id: 'route--notFound',
    path: '*',
    private: false,
    element: <Error.NotFound />,
  },
] as const;

export default function ValidationRoute() {
  const { pathname } = useLocation();

  return (
    <Routes>
      {routesList.map(route =>
        pathname === '/' ? (
          <Route
            key={route.id}
            path={route.path}
            element={
              <>
                <AccessAuth isPrivate={route.private}>
                  {route.element}
                </AccessAuth>
                <Navigate replace to="/root" />
              </>
            }
          />
        ) : (
          <Route
            key={route.id}
            path={route.path}
            element={
              <>
                <AccessAuth isPrivate={route.private}>
                  {route.element}
                </AccessAuth>
              </>
            }
          />
        )
      )}
    </Routes>
  );
}
