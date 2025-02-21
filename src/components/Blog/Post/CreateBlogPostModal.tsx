/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from '@/components/Image';
import * as S from './style';
import {
  CreateBlogPostModalProps,
  CreateBlogPostState,
  onTogglePublicHandlerParams,
} from './type';
import { useMemo, useState } from 'react';
import { Svg } from '@/components/Svg';
import { DefaultBlockSchema } from '@blocknote/core';
import { useLocation } from 'react-router-dom';
import { BlogQueries } from '@/apis/blog';
import { toast } from 'react-toastify';
import { SuccessNewBlogPostToast } from './SuccessNewBlogPostToast';

export default function CreateBlogPostModal(data: CreateBlogPostModalProps) {
  const { pathname } = useLocation();
  const [createBlogPostInfo, setCreateBlogPostInfo] =
    useState<CreateBlogPostState>({
      id: pathname.split('/')[pathname.split('/').length - 2],
      title: data.title,
      contents: data.contents,
      date: data.date,
      location: data.location,
      isPublic: false,
      tagNames: data.tagNames,
      fileUrls: [],
    });
  const thumbnail = useMemo(() => {
    const temp: any[] = data.contents
      .filter(content => content.type === 'image')
      .map((ele: any) => ele.props?.url);
    //저장한 이미지를 배열 형태로 보냄(백엔드에서 확인하는 용도)
    setCreateBlogPostInfo(prev => ({ ...prev, fileUrls: temp }));
    if (!temp[0]) return null;
    return temp[0];
  }, [data.contents]);

  const shortDescription = useMemo(() => {
    const temp: any[] = data.contents
      .filter(
        content => content.type === 'paragraph' && content.content?.length !== 0
      )
      .splice(0, 2) as unknown as DefaultBlockSchema['paragraph'][];

    return (
      temp
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(content => content.content?.map((data: any) => data.text).join(''))
        .join('\n')
    );
  }, [data.contents]);

  const onTogglePublicHandler = (status: onTogglePublicHandlerParams) => {
    if (status === 'public') {
      setCreateBlogPostInfo(prev => ({ ...prev, isPublic: true }));
    } else {
      setCreateBlogPostInfo(prev => ({ ...prev, isPublic: false }));
    }
  };

  const createBlogPostMutate = BlogQueries.CreateNewBlogPostMutate();

  const onSubmitCreateBlogPostHandler: React.FormEventHandler<
    HTMLFormElement
  > = e => {
    e.preventDefault();
    console.log(createBlogPostInfo);
    createBlogPostMutate.mutate(createBlogPostInfo, {
      onSuccess: res => {
        toast.success(
          <SuccessNewBlogPostToast
            postId={res.id}
            blogHome={createBlogPostInfo.id}
          />
        );
      },
    });
  };

  return (
    <S.CreateBlogPostModalWrapper>
      <form onSubmit={onSubmitCreateBlogPostHandler}>
        <div>
          <label>제목</label>
          <h2>{data.title}</h2>
          <label>섬네일</label>
          {thumbnail ? (
            <S.ThumbnailWrapper>
              <Image src={thumbnail} width="100%" height="100%" fit="contain" />
            </S.ThumbnailWrapper>
          ) : (
            <S.ThumbnailWrapper>
              <span>등록된 이미지가 없습니다.</span>
              <label htmlFor="thumbnail">
                이미지 등록하기
                <Svg.UploadIcon />
              </label>
              <input type="file" id="thumbnail" hidden />
            </S.ThumbnailWrapper>
          )}
          <label>짧은 설명</label>
          <S.ShortDescriptionTextArea value={shortDescription} readOnly />
        </div>
        <div>
          <label>공개 비공개 여부</label>
          <S.PublicSelectedBoxWrapper $isPublic={createBlogPostInfo.isPublic}>
            <button
              type="button"
              onClick={() => onTogglePublicHandler('public')}
            >
              공개
            </button>
            <button
              type="button"
              onClick={() => onTogglePublicHandler('private')}
            >
              비공개
            </button>
          </S.PublicSelectedBoxWrapper>
          <S.CreateBlogPostSubmitButtonWrapper>
            <button type="submit">게시하기</button>
          </S.CreateBlogPostSubmitButtonWrapper>
        </div>
      </form>
    </S.CreateBlogPostModalWrapper>
  );
}
