import { Svg } from '@/components/Svg';
import * as S from './style';

export default function ChatButton({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <S.ButtonWrapper onClick={() => setIsOpen(prev => !prev)}>
      <Svg.ChatIcon size={39} />
    </S.ButtonWrapper>
  );
}
