import { useTheme } from 'styled-components';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useState } from 'react';
import { changeInfo } from '@/utils';
import { toast } from 'react-toastify';

export default function LeftSideNav() {
  const theme = useTheme();
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
        console.log('123132');
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
        </div>
      )}
    </S.LeftSideFloatingNavWrapper>
  );
}
