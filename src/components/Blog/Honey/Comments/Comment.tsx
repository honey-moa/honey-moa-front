import Image from '@/components/Image';
import * as S from './style';
import { BlogCommentContentsType } from '@/apis/blogComments/type';
import { changeInfo, date } from '@/utils';
import { useLayoutEffect, useRef, useState } from 'react';
import { BlogCommentsQueries } from '@/apis/blogComments';
import { toast } from 'react-toastify';

export default function Comment(comment: BlogCommentContentsType) {
  const [updateCommentInfo, setUpdateCommentInfo] = useState({
    content: comment.content,
    isEdit: false,
  });
  const updateCommentRef = useRef<HTMLTextAreaElement>(null);
  const readOnlyCommentRef = useRef<HTMLTextAreaElement>(null);

  const updateCommentMutate =
    BlogCommentsQueries.useUpdateBlogPostCommentMutation();
  const deleteCommentMutate =
    BlogCommentsQueries.useDeleteBlogPostCommentMutation();

  const onToggleUpdateComment = changeInfo.toggle({
    setState: setUpdateCommentInfo,
    key: 'isEdit',
  });
  const onChangeUpdateComment = changeInfo.text({
    setState: setUpdateCommentInfo,
  });

  useLayoutEffect(() => {
    if (updateCommentRef.current) {
      updateCommentRef.current.focus();
      updateCommentRef.current.selectionStart =
        updateCommentRef.current.value.length;
      updateCommentRef.current.selectionEnd =
        updateCommentRef.current.value.length;
    }
  }, [onToggleUpdateComment]);

  useLayoutEffect(() => {
    if (updateCommentRef.current) {
      updateCommentRef.current.style.height = 'auto';
      updateCommentRef.current.style.height =
        updateCommentRef.current.scrollHeight + 'px';
    }
  }, [updateCommentInfo.content, updateCommentRef, onToggleUpdateComment]);

  useLayoutEffect(() => {
    if (readOnlyCommentRef.current) {
      readOnlyCommentRef.current.style.height = 'auto';
      readOnlyCommentRef.current.style.height =
        readOnlyCommentRef.current.scrollHeight + 'px';
    }
  }, [updateCommentInfo.isEdit, comment.content]);

  const onClickUpdateCommentButton = () => {
    updateCommentMutate.mutate(
      {
        id: comment.blogPostId,
        content: updateCommentInfo.content,
        blogPostCommentId: comment.id,
      },
      {
        onSuccess: () => {
          toast.success('댓글이 수정되었습니다.');
        },
      }
    );
    setUpdateCommentInfo(prev => {
      return {
        ...prev,
        isEdit: false,
      };
    });
  };

  const onClickDeleteCommentButton = () => {
    if (confirm('정말로 삭제 하시겠습니까?')) {
      deleteCommentMutate.mutate(
        {
          id: comment.blogPostId,
          blogPostCommentId: comment.id,
        },
        {
          onSuccess: () => {
            toast.success('댓글이 삭제되었습니다.');
          },
        }
      );
    }
  };

  return (
    <S.BlogComment key={comment.id}>
      <S.CommentInfoWrapper>
        <Image
          src={comment.user.profileImageUrl}
          alt="profile"
          borderRadius="50%"
          width="50px"
          height="50px"
        />
        <div>
          <div>
            <span>{comment.user.nickname}</span>
            <p>
              {date.getFormattingDate({
                date: comment.createdAt,
                formatType: '년월일',
              })}
            </p>
          </div>
          {updateCommentInfo.isEdit ? (
            <S.CommentTextarea
              ref={updateCommentRef}
              value={updateCommentInfo.content}
              id="content"
              onChange={onChangeUpdateComment}
            />
          ) : (
            <S.ReadOnlyCommentTextarea
              ref={readOnlyCommentRef}
              value={comment.content}
              readOnly
            />
          )}
        </div>
      </S.CommentInfoWrapper>
      <S.EditCommentButtonWrapper>
        {!updateCommentInfo.isEdit ? (
          <>
            <button onClick={onToggleUpdateComment}>수정</button>
            <button onClick={onClickDeleteCommentButton}>삭제</button>
          </>
        ) : (
          <button onClick={onClickUpdateCommentButton}>완료</button>
        )}
      </S.EditCommentButtonWrapper>
    </S.BlogComment>
  );
}
