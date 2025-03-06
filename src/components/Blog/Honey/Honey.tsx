import { Header } from '@/components/Layouts';
import BlogComments from './BlogComments';
import { useLocation } from 'react-router-dom';
import { BlogQueries } from '@/apis/blog';
import LeftSideNav from './LeftSideNav';
import * as S from './style';
import RightSideNav from './RightSideNav';
import BlogContents from './BlogContents';

export default function Honey() {
  const { pathname } = useLocation();
  const honeyId = pathname.split('/')[pathname.split('/').length - 1];
  const honeyData = BlogQueries.GetBlogHoneyQuery({ id: honeyId });

  return (
    <>
      <Header.BlogHeader />
      <S.HoneyContentsDivLeftAndRight>
        <LeftSideNav blogId={honeyData?.blogId} id={honeyData?.id} />
        <BlogContents {...honeyData} />
        <RightSideNav />
      </S.HoneyContentsDivLeftAndRight>
      <BlogComments id={honeyData?.id} />
    </>
  );
}
