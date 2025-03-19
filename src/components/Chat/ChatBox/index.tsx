import { ChatBoxProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import useLocalStorage from '@/hook/useLocalStorage';
import ChatRoomModal from './ChatModal';
import { ChatQueries } from '@/apis/chat';

export default function ChatBox({ isOpen, setIsOpen }: ChatBoxProps) {
  const { value: token } = useLocalStorage('accessToken');
  const belongToChatRoom = ChatQueries.useGetBelongToChatRoom();

  if (!token) return;

  return (
    <>
      <S.ButtonWrapper onClick={() => setIsOpen(prev => !prev)}>
        <Svg.ChatIcon size={40} />
      </S.ButtonWrapper>
      {isOpen && (
        <ChatRoomModal
          setIsOpen={setIsOpen}
          belongToChatRoomData={belongToChatRoom}
        />
      )}
    </>
  );
}
