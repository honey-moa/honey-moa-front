import { useCreateBlockNote } from '@blocknote/react';
import * as S from './style';
import { BlockNoteView } from '@blocknote/mantine';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';
import { BlogQueries } from '@/apis/blog';
import { useLocation } from 'react-router-dom';
import { Profile } from '@/components/Layouts';
import { useMemo } from 'react';
import { darkTheme, lightTheme } from '../Post/Editor';
import useLocalStorage from '@/hook/useLocalStorage';

export default function BlogContents() {
  const theme = useTheme();
  const { value: themeColor } = useLocalStorage('theme');
  const { pathname } = useLocation();
  const honeyId = pathname.split('/')[pathname.split('/').length - 1];
  const honeyData = BlogQueries.GetBlogHoneyQuery({ id: honeyId });
  const bloggerInfo = BlogQueries.GetSingleBlogQuery(honeyData?.userId);
  const editor = useCreateBlockNote({
    initialContent: honeyData?.contents,
  });

  const coupleName = useMemo(() => {
    return bloggerInfo?.members.map(member => member.nickname).join(' & ');
  }, [bloggerInfo]);

  const pastYear = useMemo(() => {
    const now = new Date();
    const coupleDDay = bloggerInfo?.dDayStartDate.split('-');
    const coupleYear = now.getFullYear() - Number(coupleDDay![0]);
    if (coupleYear === 0) {
      return '1년 미만';
    }
    return `${coupleYear}년`;
  }, [bloggerInfo]);

  return (
    <S.HoneyWrapper>
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
      <S.HoneyContainer>
        <S.HoneyHeader>
          <S.TagsWrapper>
            {honeyData?.tags.map(tag => (
              <div key={`${tag.id}-tag`}>#{tag.name}</div>
            ))}
          </S.TagsWrapper>
          <S.HoneyTitleH1>{honeyData?.title}</S.HoneyTitleH1>
          <S.DateAndLocationWrapper>
            <span>{honeyData?.date}</span>
            <p>
              <Svg.LocationIcon />
              {honeyData?.location}
            </p>
          </S.DateAndLocationWrapper>
          <S.CoupleProfileWrapper>
            <Profile.TogetherImage members={bloggerInfo?.members} />
            <div>
              <p>{coupleName}</p>
              <p>{pastYear}커플</p>
            </div>
          </S.CoupleProfileWrapper>
        </S.HoneyHeader>
        <S.BlockNoteWrapper>
          <BlockNoteView
            editor={editor}
            editable={false}
            theme={themeColor === 'dark' ? darkTheme : lightTheme}
          />
        </S.BlockNoteWrapper>
      </S.HoneyContainer>
    </S.HoneyWrapper>
  );
}
