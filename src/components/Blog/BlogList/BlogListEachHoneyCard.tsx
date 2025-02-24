import * as S from './style';

import { useCreateBlockNote } from '@blocknote/react';
import { PaginationContents } from './type';
import { BlockNoteView } from '@blocknote/mantine';
import { date } from '@/utils';
import { darkTheme, lightTheme } from '../Post/Editor';
import useLocalStorage from '@/hook/useLocalStorage';
import { useMemo } from 'react';
import Image from '@/components/Image';

export function BlogListEachHoneyCard(props: PaginationContents) {
  const editor = useCreateBlockNote({
    initialContent: props.contents.filter(
      content => content.type === 'paragraph'
    ),
  });
  const { value: theme } = useLocalStorage('theme');

  const postDate = useMemo(
    () => date.getFormattingDate({ date: props.createdAt, formatType: '월일' }),
    [props.date]
  );
  const isThumbnailImage = useMemo(() => {
    const temp = props.thumbnailImageUrl.split('/');
    console.log(temp);
    return temp[temp.length - 1] === 'null' ? false : true;
  }, [props.thumbnailImageUrl]);

  return (
    <S.BlogHoneyCardWrapper to={`/blog/${props.blogId}/post/${props.id}`}>
      {!isThumbnailImage ? (
        <>
          <S.HoneyInfoWrapper>
            <h3>{props.title}</h3>
            <span>{postDate}</span>
          </S.HoneyInfoWrapper>
          <S.HoneyCardSummary>
            <BlockNoteView
              editor={editor}
              editable={false}
              theme={theme === 'dark' ? darkTheme : lightTheme}
            />
          </S.HoneyCardSummary>
          <S.HoneyCardTagsWrapper>
            {props.tags?.map(tag => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </S.HoneyCardTagsWrapper>
        </>
      ) : (
        <>
          <Image
            src={props.thumbnailImageUrl}
            alt="thumbnail"
            width="100%"
            height="45%"
          />
          <S.HoneyInfoWrapper>
            <h3>{props.title}</h3>
            <span>{postDate}</span>
          </S.HoneyInfoWrapper>
          <S.HoneyCardSummary>{props.summary}</S.HoneyCardSummary>
          <S.HoneyCardTagsWrapper>
            {props.tags?.map(tag => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </S.HoneyCardTagsWrapper>
        </>
      )}
    </S.BlogHoneyCardWrapper>
  );
}
