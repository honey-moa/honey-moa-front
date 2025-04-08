import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import PrivateBlogContents from './privateBlog/PrivateBlogContents';
import UnConnectBlog from './UnConnectBlog/UnConnectBlog';

export default function MappingBlog() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  if (getBlogInfo) {
    return <PrivateBlogContents />;
  }

  return <UnConnectBlog />;
}
