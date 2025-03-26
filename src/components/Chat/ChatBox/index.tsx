import { ChatBoxProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import useLocalStorage from '@/hook/useLocalStorage';
import ChatRoomModal from './ChatModal';
import { ChatQueries } from '@/apis/chat';
import { useSocket } from '@/hook/useSocket';
import { useEffect, useRef } from 'react';
import { scrollToBottom, useReceivedMessage } from '../hooks';

export default function ChatBox({ isOpen, setIsOpen }: ChatBoxProps) {
  const { value: token } = useLocalStorage('accessToken');
  const belongToChatRoom = ChatQueries.useGetBelongToChatRoom();

  const socket = useSocket();
  const { onMessageReceived } = useReceivedMessage();

  const scrollToBottomRef = useRef<HTMLDivElement>(null);

  const openChatModalHandler = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    socket?.emit('enter_chat_room', { roomId: belongToChatRoom?.id });
    socket?.on('receive_message', res => {
      onMessageReceived(res);
      scrollToBottom(scrollToBottomRef);
    });

    return () => {
      socket?.off('enter_chat_room');
      socket?.off('receive_message', res => {
        onMessageReceived(res);
        scrollToBottom(scrollToBottomRef);
      });
    };
  }, [socket]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(scrollToBottomRef);
    }
  }, [isOpen]);

  if (!token) return;

  return (
    <>
      <S.ButtonWrapper onClick={openChatModalHandler}>
        <Svg.ChatIcon size={40} />
      </S.ButtonWrapper>
      {isOpen && (
        <ChatRoomModal
          setIsOpen={setIsOpen}
          belongToChatRoomData={belongToChatRoom}
          socket={socket}
          scrollToBottomRef={scrollToBottomRef}
        />
      )}
    </>
  );
}
