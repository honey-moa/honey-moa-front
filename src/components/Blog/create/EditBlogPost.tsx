import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { PostContentsType } from './type';
import { Editor } from './Editor';
import Tags from './Tags';
import { changeInfo } from '@/utils';
import PostHeader from './PostHeader';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import { BlogQueries } from '@/apis/blog';
import { useLocation } from 'react-router-dom';

export default function EditBlogPost() {
  const titleTextRef = useRef<HTMLTextAreaElement>(null);
  const theme = useTheme();
  const { pathname } = useLocation();
  const id = pathname.split('/')[pathname.split('/').length - 2];

  const getPostInfo = BlogQueries.GetBlogHoneyQuery({ id });

  const [contents, setContents] = useState<PostContentsType>({
    title: '',
    tagNames: [],
    date: '',
    location: '',
    contents: [],
    thumbnailImageUrl: '',
    isPublic: false,
  });

  const [isToast, setIsToast] = useState({
    title: true,
  });

  const contentsStateChangeHandler = changeInfo.text<PostContentsType>({
    setState: setContents,
  });

  const titleChangeHandler = () => {
    const titleLength = contents.title.length;
    const textarea = titleTextRef.current;
    if (titleLength > 50) {
      if (isToast.title) {
        setIsToast({ ...isToast, title: false });
        toast.error('제목은 50글자 이하로 작성해주세요.');
      }
      if (textarea) {
        textarea.style.color = theme.accent.red;
      }
    } else {
      if (textarea) {
        textarea.style.color = theme.text.primary;
        setIsToast({ ...isToast, title: true });
      }
    }
  };

  useEffect(() => {
    titleChangeHandler();
  }, [contents.title]);

  useEffect(() => {
    if (getPostInfo) {
      setContents({
        title: getPostInfo?.title,
        tagNames: getPostInfo?.tags.map(tag => tag.name),
        date: getPostInfo?.date,
        location: getPostInfo?.location,
        contents: getPostInfo?.contents,
        thumbnailImageUrl: getPostInfo?.thumbnailImageUrl,
        isPublic: getPostInfo?.isPublic,
      });
    }
  }, [getPostInfo]);

  const TitleChangeHandler = () => {
    const textarea = titleTextRef.current;
    if (textarea) {
      textarea.style.height = '66px';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  return (
    <>
      <S.PostWrapper>
        <PostHeader {...contents} />
        <S.PostContainer>
          <S.PostTitleWrapper>
            <textarea
              ref={titleTextRef}
              name="blog-title"
              id="title"
              placeholder="제목을 입력하세요"
              value={contents.title}
              onInput={TitleChangeHandler}
              onChange={contentsStateChangeHandler}
            />
            <label></label>
            <Tags tags={contents.tagNames} setContents={setContents} />
          </S.PostTitleWrapper>
          <S.DateAndLocationWrapper>
            <S.DateInput
              type="date"
              id="date"
              onChange={contentsStateChangeHandler}
              value={contents.date}
            />
            <div>
              <Svg.LocationIcon size={18} color={theme.button.primary.base} />
              <S.LocationInput
                type="text"
                placeholder="장소를 입력하세요"
                id="location"
                value={contents.location}
                onChange={contentsStateChangeHandler}
              />
            </div>
          </S.DateAndLocationWrapper>
          <S.PostContents>
            {contents.contents.length !== 0 && (
              <Editor
                setContents={setContents}
                initializedContents={contents.contents}
              />
            )}
          </S.PostContents>
        </S.PostContainer>
      </S.PostWrapper>
    </>
  );
}
