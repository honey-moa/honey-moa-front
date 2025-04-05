import { Svg } from '@/components/Svg';
import * as S from './style';
import { BlogCommentType } from '../type';
import { useTheme } from 'styled-components';
import { useLayoutEffect, useRef, useState } from 'react';
import onChangeTextInfo from '@/utils/changeInfo/text';
import Image from '@/components/Image';
import { BlogCommentsQueries } from '@/apis/blogComments';
import { toast } from 'react-toastify';
import { UserQueries } from '@/apis/user';
import Comment from './Comment';
import { useLocation } from 'react-router-dom';
import { BlogQueries } from '@/apis/blog';

export default function BlogComments() {
  const { pathname } = useLocation();
  const honeyId = pathname.split('/')[pathname.split('/').length - 1];
  const honeyData = BlogQueries.GetBlogHoneyQuery({ id: honeyId });

  const theme = useTheme();
  const [commentInfo, setCommentInfo] = useState<BlogCommentType>({
    content: '',
  });
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const myInfo = UserQueries.GetMyInfoQuery();
  const commentList = BlogCommentsQueries.useBlogPostCommentsPaginationQuery({
    id: honeyData?.id,
  });

  const newCommentMutate = BlogCommentsQueries.useNewBlogPostCommentMutation();

  const flattenedContents =
    commentList?.data?.pages.flatMap(page => page.contents) || [];

  const onChangeComment = onChangeTextInfo({ setState: setCommentInfo });
  const sendComment: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    newCommentMutate.mutate(
      {
        id: honeyData?.id,
        content: commentInfo.content,
      },
      {
        onSuccess: () => {
          toast.success('댓글이 등록되었습니다.');
        },
      }
    );
    setCommentInfo(prev => {
      return {
        ...prev,
        content: '',
      };
    });
  };

  useLayoutEffect(() => {
    if (commentTextRef.current) {
      commentTextRef.current.style.height = 'auto';
      commentTextRef.current.style.height =
        commentTextRef.current.scrollHeight + 'px';
    }
  }, [commentInfo.content]);

  return (
    <S.BlogCommentsWrapper>
      <S.BlogCommentsHeader>
        <h2>댓글</h2>
        <p>{commentList.data?.pages[0].totalCount}</p>
      </S.BlogCommentsHeader>
      <S.NewCommentWrapper onSubmit={sendComment}>
        <Image
          src={myInfo?.profileImageUrl}
          alt="profile"
          borderRadius="50%"
          width="50px"
          height="50px"
        />
        <S.CommentTextarea
          ref={commentTextRef}
          placeholder="댓글을 입력해주세요"
          value={commentInfo.content}
          id="content"
          onChange={onChangeComment}
        />
        <S.SendButton type="submit">
          <Svg.SendIcon color={theme.button.primary.base} />
        </S.SendButton>
      </S.NewCommentWrapper>
      <S.BlogCommentsContentsWrapper>
        {flattenedContents.map(comment => {
          const temp = {
            ...comment,
            commentOwner: myInfo?.id,
          };
          return <Comment key={comment.id} {...temp} />;
        })}
        {commentList.data?.pages[0].totalCount !== undefined &&
          commentList.data?.pages[0].totalCount > 5 &&
          commentList.data?.pages[commentList.data?.pages.length - 1]
            .hasNext && (
            <button onClick={() => commentList?.fetchNextPage()}>
              더보기...
            </button>
          )}
      </S.BlogCommentsContentsWrapper>
    </S.BlogCommentsWrapper>
  );
}
