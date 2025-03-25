import { ChatBoxProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import useLocalStorage from '@/hook/useLocalStorage';
import ChatRoomModal from './ChatModal';
import { ChatQueries } from '@/apis/chat';
import { useSocket } from '@/hook/useSocket';
import { useEffect } from 'react';
import { useReceivedMessage } from '../hooks';

export default function ChatBox({ isOpen, setIsOpen }: ChatBoxProps) {
  const { value: token } = useLocalStorage('accessToken');
  const belongToChatRoom = ChatQueries.useGetBelongToChatRoom();

  const socket = useSocket();
  const { onMessageReceived } = useReceivedMessage();

  useEffect(() => {
    socket?.emit('enter_chat_room', { roomId: belongToChatRoom?.id });
    socket?.on('receive_message', onMessageReceived);

    return () => {
      socket?.off('enter_chat_room');
      socket?.off('receive_message', onMessageReceived);
    };
  }, [socket]);

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
          socket={socket}
        />
      )}
    </>
  );
}
