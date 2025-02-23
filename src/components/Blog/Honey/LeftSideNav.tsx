import { useTheme } from 'styled-components';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useState } from 'react';
import { changeInfo } from '@/utils';
import { toast } from 'react-toastify';
import { BlogQueries } from '@/apis/blog';
import { HoneyLeftSideNavProps } from './type';
import { useNavigate } from 'react-router-dom';

export default function LeftSideNav({ id, blogId }: HoneyLeftSideNavProps) {
  const theme = useTheme();
  const navigation = useNavigate();
  const [share, setShare] = useState({
    isOpen: false,
  });

  const onToggleShare = changeInfo.toggle({
    setState: setShare,
    key: 'isOpen',
  });

  const onClickShareHandler = (type: 'share' | 'copy') => {
    const obj = {
      share: () => {
        if (confirm('연인에게 해당 이야기를 공유하시겠습니까?')) {
          //공유 로직
          toast.success('연인에게 공유되었습니다.');
        }
      },
      copy: () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success('클립보드에 복사되었습니다.');
      },
    } as const;
    onToggleShare();
    return obj[type]();
  };

  const deleteMutation = BlogQueries.DeleteBlogPostMutate();

  const onClickEditHandler = (type: 'edit' | 'delete') => {
    const obj = {
      edit: () => {},
      delete: () => {
        if (confirm('해당 이야기를 삭제하시겠습니까?')) {
          deleteMutation.mutate(
            {
              blogId: blogId,
              postId: id,
            },
            {
              onSuccess: () => {
                navigation(`/honeyJar/${blogId}`);
              },
            }
          );
          //삭제 로직
          toast.success('해당 이야기가 삭제되었습니다.');
        }
      },
    };
    onToggleShare();
    return obj[type]();
  };

  return (
    <S.LeftSideFloatingNavWrapper>
      <button onClick={onToggleShare}>
        <Svg.ShareIcon color={theme.button.primary.base} />
      </button>
      {share.isOpen && (
        <div>
          <S.ShareBoxButton
            $index={1}
            onClick={() => onClickShareHandler('share')}
          >
            <Svg.SendIcon color={theme.text.primary} />
          </S.ShareBoxButton>
          <S.ShareBoxButton
            $index={2}
            onClick={() => onClickShareHandler('copy')}
          >
            <Svg.FileIcon color={theme.text.primary} />
          </S.ShareBoxButton>
          <S.ShareBoxButton
            $index={3}
            onClick={() => onClickEditHandler('edit')}
          >
            수정
          </S.ShareBoxButton>
          <S.ShareBoxButton
            $index={4}
            onClick={() => onClickEditHandler('delete')}
          >
            삭제
          </S.ShareBoxButton>
        </div>
      )}
    </S.LeftSideFloatingNavWrapper>
  );
}
