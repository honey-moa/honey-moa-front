import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import CoupleProfile from './Profile/CoupleProfile';
import UnConnectedProfile from './Profile/UnConnected';

export default function MappingProfile() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  if (getBlogInfo) {
    return <CoupleProfile />;
  }

  return <UnConnectedProfile />;
}
