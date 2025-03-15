import * as S from './style';

import { PaginationContents } from './type';
import { date } from '@/utils';
import { useMemo } from 'react';
import Image from '@/components/Image';
import useScrollTo from '@/hook/useScrollTo';

export function BlogListEachHoneyCard(props: PaginationContents) {
  const { saveToPosition } = useScrollTo({ key: 'blog-list-location' });

  const postDate = useMemo(
    () => date.getFormattingDate({ date: props.createdAt, formatType: '월일' }),
    [props.date]
  );
  const isThumbnailImage = useMemo(() => {
    const temp = props.thumbnailImageUrl.split('/');
    return temp[temp.length - 1] === 'null' ? false : true;
  }, [props.thumbnailImageUrl]);

  return (
    <S.BlogHoneyCardWrapper
      to={`/blog/${props.blogId}/post/${props.id}`}
      onClick={saveToPosition}
    >
      {!isThumbnailImage ? (
        <>
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
