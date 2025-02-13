import { Header } from '@/components/Layouts';
import BlogComments from './BlogComments';
import BlogContents from './BlogContents';
import { useLocation } from 'react-router-dom';
import { HoneyContentType } from './type';
import { BlogQueries } from '@/apis/blog';
import LeftSideNav from './LeftSideNav';
import * as S from './style';
import RightSideNav from './RightSideNav';

export default function Honey() {
  const { pathname } = useLocation();
  const honeyId = pathname.split('/')[pathname.split('/').length - 1];

  const honeyData = BlogQueries.GetBlogHoneyQuery({ id: honeyId });

  const honeyContents: Partial<HoneyContentType> = {
    contents: honeyData?.contents,
    userId: honeyData?.userId,
    title: honeyData?.title,
    date: honeyData?.date,
    location: honeyData?.location,
    isPublic: honeyData?.isPublic,
    tags: honeyData?.tags,
  };

  return (
    <>
      <Header.BlogHeader />
      <S.HoneyContentsDivLeftAndRight>
        <LeftSideNav />
        <BlogContents {...honeyContents} />
        <RightSideNav />
      </S.HoneyContentsDivLeftAndRight>
      <BlogComments />
    </>
  );
}
