import * as S from './style';
import { BlockNoteView } from '@blocknote/mantine';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';
import { BlogQueries } from '@/apis/blog';
import { Profile } from '@/components/Layouts';
import { useEffect, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from '../Post/Editor';
import useLocalStorage from '@/hook/useLocalStorage';
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { HoneyContentType } from './type';

export default function BlogContents(honeyData: Partial<HoneyContentType>) {
  const theme = useTheme();
  const { value: themeColor } = useLocalStorage('theme');

  const bloggerInfo = BlogQueries.GetSingleBlogQuery(honeyData?.userId);

  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | 'loading'
  >('loading');

  useEffect(() => {
    if (honeyData) {
      setInitialContent(honeyData.contents);
    }
  }, [honeyData]);

  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  const coupleName = useMemo(() => {
    return bloggerInfo?.members.map(member => member.nickname).join(' & ');
  }, [bloggerInfo]);

  const pastYear = useMemo(() => {
    const now = new Date();
    const coupleDDay = bloggerInfo?.dDayStartDate.split('-');
    if (coupleDDay) {
      const coupleYear = now.getFullYear() - Number(coupleDDay[0]);
      if (coupleYear === 0) {
        return '1년 미만';
      }
      return `${coupleYear}년`;
    }
  }, [bloggerInfo]);

  if (editor === undefined) {
    return 'Loading content...';
  }

  return (
    <S.HoneyWrapper>
      <S.HoneyHeader>
        <S.TagsWrapper>
          {honeyData.tags &&
            honeyData.tags.map(tag => (
              <div key={`${tag.id}-tag`}>#{tag.name}</div>
            ))}
        </S.TagsWrapper>
        <S.HoneyTitleH1>{honeyData?.title}</S.HoneyTitleH1>
        <S.DateAndLocationWrapper>
          <span>{honeyData?.date}</span>
          <p>
            <Svg.LocationIcon color={theme.button.primary.base} />
            {honeyData?.location}
          </p>
        </S.DateAndLocationWrapper>
        <S.CoupleProfileWrapper>
          <Profile.TogetherImage members={bloggerInfo?.members} />
          <div>
            <p>{coupleName}</p>
            <p>{pastYear} 커플</p>
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
    </S.HoneyWrapper>
  );
}
