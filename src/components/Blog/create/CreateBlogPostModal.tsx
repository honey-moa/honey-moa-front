/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from '@/components/Image';
import * as S from './style';
import {
  CreateBlogPostModalProps,
  CreateBlogPostState,
  onTogglePublicHandlerParams,
} from './type';
import { useEffect, useMemo, useState } from 'react';
import { Svg } from '@/components/Svg';
import { DefaultBlockSchema } from '@blocknote/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlogQueries } from '@/apis/blog';
import { toast } from 'react-toastify';
import { AttachmentsQueries } from '@/apis/attachment';
import { changeInfo } from '@/utils';

export default function CreateBlogPostModal(data: CreateBlogPostModalProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [createBlogPostInfo, setCreateBlogPostInfo] =
    useState<CreateBlogPostState>({
      id: pathname.split('/')[pathname.split('/').length - 3],
      title: data.title,
      contents: data.contents,
      date: data.date,
      location: data.location,
      isPublic: data.isPublic,
      tagNames: data.tagNames,
      fileUrls: [],
      summary: '',
      thumbnailImageUrl: data.thumbnailImageUrl ? data.thumbnailImageUrl : null,
    });

  const [editBlogPostInfo, setEditBlogPostInfo] = useState({
    blogId: '',
    postId: '',
  });

  const onChangeSummaryText = changeInfo.text({
    setState: setCreateBlogPostInfo,
  });

  useMemo(() => {
    const temp: any[] = data.contents
      .filter(content => content.type === 'image')
      .map((ele: any) => ele.props?.url);
    //저장한 이미지를 배열 형태로 보냄(백엔드에서 확인하는 용도)
    setCreateBlogPostInfo(prev => ({ ...prev, fileUrls: temp }));
    if (!temp[0]) return null;
  }, [data.contents]);

  useMemo(() => {
    const temp: any[] = data.contents
      .filter(
        content => content.type === 'paragraph' && content.content?.length !== 0
      )
      .splice(0, 2) as unknown as DefaultBlockSchema['paragraph'][];

    return setCreateBlogPostInfo(prev => ({
      ...prev,
      summary: temp
        .map(content => content.content?.map((data: any) => data.text).join(''))
        .join('\n'),
    }));
  }, [data.contents]);

  const onTogglePublicHandler = (status: onTogglePublicHandlerParams) => {
    if (status === 'public') {
      setCreateBlogPostInfo(prev => ({ ...prev, isPublic: true }));
    } else {
      setCreateBlogPostInfo(prev => ({ ...prev, isPublic: false }));
    }
  };

  const attachmentImage = AttachmentsQueries.useNewAttachmentMutation();

  const uploadThumbnailImageHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    const image = e.target.files?.[0];
    const formData = new FormData();
    formData.append('files', image as File);
    formData.append('uploadType', 'IMAGE');
    attachmentImage.mutate(
      { formData },
      {
        onSuccess: res => {
          setCreateBlogPostInfo(prev => ({
            ...prev,
            thumbnailImageUrl: res,
          }));
        },
      }
    );
  };

  const createBlogPostMutate = BlogQueries.CreateNewBlogPostMutate();
  const editBlogPostMutate = BlogQueries.UpdateBlogPostMutate();

  const onSubmitCreateBlogPostHandler: React.FormEventHandler<
    HTMLFormElement
  > = e => {
    e.preventDefault();
    if (pathname.split('/')[pathname.split('/').length - 1] !== 'edit') {
      createBlogPostMutate.mutate(createBlogPostInfo, {
        onSuccess: res => {
          toast.success('게시글 업로드를 성공했습니다.');
          navigate(`/blog/${createBlogPostInfo.id}/post/${res.id}`, {
            replace: true,
          });
        },
      });
    } else {
      editBlogPostMutate.mutate(
        {
          blogId: editBlogPostInfo.blogId,
          postId: editBlogPostInfo.postId,
          ...createBlogPostInfo,
        },
        {
          onSuccess: () => {
            toast.success('게시글이 수정되었습니다.');
            navigate(
              `/blog/${editBlogPostInfo.blogId}/post/${editBlogPostInfo.postId}`,
              {
                replace: true,
              }
            );
          },
        }
      );
    }
  };

  useEffect(() => {
    const tempId = pathname.split('/');
    setEditBlogPostInfo({
      postId: tempId[tempId.length - 2],
      blogId: tempId[tempId.length - 4],
    });
  }, [pathname]);

  return (
    <S.CreateBlogPostModalWrapper>
      <form onSubmit={onSubmitCreateBlogPostHandler}>
        <div>
          <label>제목</label>
          <h2>{data.title}</h2>
          <label>섬네일</label>
          {createBlogPostInfo.thumbnailImageUrl ? (
            <S.ThumbnailWrapper>
              <label htmlFor="thumbnail">
                <Image
                  src={createBlogPostInfo.thumbnailImageUrl}
                  width="100%"
                  height="100%"
                  fit="contain"
                />
              </label>
              <input
                type="file"
                id="thumbnail"
                hidden
                onChange={uploadThumbnailImageHandler}
              />
            </S.ThumbnailWrapper>
          ) : (
            <S.ThumbnailWrapper>
              <span>등록된 이미지가 없습니다.</span>
              <label htmlFor="thumbnail">
                이미지 등록하기
                <Svg.UploadIcon />
              </label>
              <input
                type="file"
                id="thumbnail"
                hidden
                onChange={uploadThumbnailImageHandler}
              />
            </S.ThumbnailWrapper>
          )}
          <label>짧은 설명</label>
          <S.ShortDescriptionTextArea
            value={createBlogPostInfo.summary}
            id="summary"
            onChange={onChangeSummaryText}
          />
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
