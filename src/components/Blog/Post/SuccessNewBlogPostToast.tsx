import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { useEffect } from 'react';

export const SuccessNewBlogPostToast = ({
  postId,
  blogHome,
}: {
  postId: string;
  blogHome: string;
}) => {
  const navigate = useNavigate();

  const handleGoToPost = (location: 'home' | 'post') => {
    const obj = {
      home: navigate(`/blog/${blogHome}`),
      post: navigate(`/blog/${blogHome}/post/${postId}`),
    } as const;
    return obj[location];
  };

  useEffect(() => {
    const route = setTimeout(
      () => navigate(`/blog/${blogHome}/post/${postId}`),
      5000
    );
    return () => clearTimeout(route);
  }, []);

  return (
    <S.ToastWrapper>
      <span>성공적으로 게시글을 작성했습니다!</span>
      <span>5초 뒤 자동으로 게시글로 이동됩니다.</span>
      <S.ToastButtonContainer>
        <button onClick={() => handleGoToPost('post')}>게시글 보러가기</button>
        <button onClick={() => handleGoToPost('home')}>홈으로 돌아가기</button>
      </S.ToastButtonContainer>
    </S.ToastWrapper>
  );
};
