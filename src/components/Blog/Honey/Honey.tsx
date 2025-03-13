import { Header } from '@/components/Layouts';
import BlogComments from './Comments/BlogComments';
import { useLocation } from 'react-router-dom';
import { BlogQueries } from '@/apis/blog';
import LeftSideNav from './LeftSideNav';
import * as S from './style';
import BlogContents from './BlogContents';

export default function Honey() {
  const { pathname } = useLocation();
  const honeyId = pathname.split('/')[pathname.split('/').length - 1];
  const honeyData = BlogQueries.GetBlogHoneyQuery({ id: honeyId });

  return (
    <>
      <Header.BlogHeader />
      <S.HoneyContentsDivLeftAndRight>
        <LeftSideNav
          blogId={honeyData?.blogId}
          id={honeyData?.id}
          userId={honeyData?.userId}
        />
        <BlogContents {...honeyData} />
      </S.HoneyContentsDivLeftAndRight>
      <BlogComments id={honeyData?.id} />
    </>
  );
}
