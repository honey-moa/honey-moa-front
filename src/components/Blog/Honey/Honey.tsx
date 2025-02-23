import { Header } from '@/components/Layouts';
import BlogComments from './BlogComments';
import { useLocation } from 'react-router-dom';
import { HoneyContentType } from './type';
import { BlogQueries } from '@/apis/blog';
import LeftSideNav from './LeftSideNav';
import * as S from './style';
import RightSideNav from './RightSideNav';
import BlogContents from './BlogContents';

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
    blogId: honeyData?.blogId,
    id: honeyData?.id,
  };

  return (
    <>
      <Header.BlogHeader />
      <S.HoneyContentsDivLeftAndRight>
        <LeftSideNav blogId={honeyContents.blogId!} id={honeyContents.id!} />
        <BlogContents {...honeyContents} />
        <RightSideNav />
      </S.HoneyContentsDivLeftAndRight>
      <BlogComments />
    </>
  );
}
