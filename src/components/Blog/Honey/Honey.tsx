import { Header } from '@/components/Layouts';
import BlogComments from './BlogComments';
import BlogContents from './BlogContents';
import { useLocation } from 'react-router-dom';
import { HoneyContentType } from './type';
import { BlogQueries } from '@/apis/blog';
import * as S from './style';
import { useTheme } from 'styled-components';
import { Svg } from '@/components/Svg';

export default function Honey() {
  const theme = useTheme();
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
      <S.LeftSideFloatingNavWrapper>
        <div>
          <S.LikeWrapper>
            <Svg.LikeIcon color={theme.button.primary.base} fill={false} />
            {999}
          </S.LikeWrapper>
          <div>
            <Svg.ShareIcon color={theme.button.primary.base} />
          </div>
        </div>
      </S.LeftSideFloatingNavWrapper>
      <BlogContents {...honeyContents} />
      <BlogComments />
    </>
  );
}
