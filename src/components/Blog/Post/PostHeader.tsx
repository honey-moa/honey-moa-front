import { Svg } from '@/components/Svg';
import * as S from './style';
import { useTheme } from 'styled-components';
import { PostContentsType } from './type';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/Modal';
import { useState } from 'react';
import CreateBlogPostModal from './CreateBlogPostModal';
import { toast } from 'react-toastify';

export default function PostHeader({ ...data }: PostContentsType) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCreateBlogModalOpen, setIsCreateBlogModalOpen] = useState(false);

  const isValidateNewBlogPost = (info: PostContentsType) => {
    if (!info.title) {
      return '제목을 입력해주세요.';
    }
    if (info.contents.length < 1) {
      return '내용을 입력해주세요.';
    }
    if (!info.date) {
      return '날짜를 입력해주세요.';
    }
    if (!info.location) {
      return '장소를 입력해주세요.';
    }
    return false;
  };

  const submitContentsOpenModal = () => {
    if (!isValidateNewBlogPost(data)) {
      setIsCreateBlogModalOpen(prev => !prev);
    } else {
      toast.error(isValidateNewBlogPost(data));
    }
  };

  const ExitPostPage = () => {
    if (confirm('작성 중인 내용이 사라집니다. 정말 나가시겠습니까?')) {
      navigate(-1);
    }
  };

  return (
    <S.PostHeaderWrapper>
      <S.PostHeader>
        <S.ActionButton
          $bgColor={theme.bg.primary}
          $color={theme.text.primary}
          $hoverColor={theme.button.tertiary.hover}
          onClick={ExitPostPage}
        >
          <Svg.PrevIcon />
          나가기
        </S.ActionButton>
        <div>
          <S.ActionButton
            $bgColor={theme.button.primary.base}
            $color={theme.text.secondary}
            $hoverColor={theme.button.primary.hover}
            onClick={submitContentsOpenModal}
          >
            게시하기
          </S.ActionButton>
          <Modal isOpen={isCreateBlogModalOpen}>
            <CreateBlogPostModal {...data} />
          </Modal>
        </div>
      </S.PostHeader>
    </S.PostHeaderWrapper>
  );
}
