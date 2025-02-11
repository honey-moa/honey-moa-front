import { Svg } from '@/components/Svg';
import * as S from './style';
import { BlogCommentType } from './type';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import onChangeTextInfo from '@/utils/changeInfo/text';
import Image from '@/components/Image';

const blogCommentsMock: BlogCommentType[] = [
  {
    id: '4124',
    content: '좋은 글이네요!',
    date: '2025-01-14',
    user: {
      id: '1234',
      name: '김철수',
      profileImage: 'images/profileImage.jpg',
    },
  },
];

export default function BlogComments() {
  const theme = useTheme();
  const [comments, setComments] = useState<BlogCommentType[]>(blogCommentsMock);
  const [commentInfo, setCommentInfo] = useState<BlogCommentType>({
    content: '',
    id: '121fef',
    date: '2025-01-21',
    user: {
      id: 'aefqe123',
      name: '이재진',
      profileImage: '',
    },
  });

  const onChangeComment = onChangeTextInfo({ setState: setCommentInfo });
  const sendComment: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setComments(prev => {
      return [...prev, commentInfo];
    });
    setCommentInfo(prev => {
      return {
        ...prev,
        content: '',
      };
    });
  };

  return (
    <S.BlogCommentsWrapper>
      <S.BlogCommentsHeader>
        <h2>댓글</h2>
        <p>({12})</p>
      </S.BlogCommentsHeader>
      <S.BlogCommentsContentsWrapper>
        {comments.map(comment => {
          return (
            <S.BlogComment key={comment.id}>
              <Image
                src={comment.user.profileImage}
                alt="profile"
                borderRadius="50%"
                width="50px"
                height="50px"
              />
              <div>
                <div>
                  <span>{comment.user.name}</span>
                  <p>{comment.date}</p>
                </div>
                <p>{comment.content}</p>
              </div>
            </S.BlogComment>
          );
        })}
      </S.BlogCommentsContentsWrapper>
      <S.NewCommentWrapper onSubmit={sendComment}>
        <Image
          src="images/profileImage.jpg"
          alt="profile"
          borderRadius="50%"
          width="50px"
          height="50px"
        />
        <S.CommentInput
          type="text"
          placeholder="댓글을 입력해주세요"
          value={commentInfo.content}
          id="content"
          onChange={onChangeComment}
        />
        <S.SendButton type="submit">
          <Svg.SendIcon color={theme.button.primary.base} />
        </S.SendButton>
      </S.NewCommentWrapper>
    </S.BlogCommentsWrapper>
  );
}
