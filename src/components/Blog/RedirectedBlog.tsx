import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Navigate } from 'react-router-dom';

export default function RedirectedBlog() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  if (getBlogInfo) {
    return <Navigate to={`/blog/${getBlogInfo.id}`} />;
  }

  return <Navigate to={`/blog/${myInfo?.id}`} />;
}
