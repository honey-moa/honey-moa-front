import * as S from './style';
import { Svg } from '@/components/Svg';
import useLocalStorage from '@/hook/useLocalStorage';
import ChatRoomModal from './ChatModal';
import { ChatQueries } from '@/apis/chat';
import { useSocket } from '@/hook/useSocket';
import { useEffect, useRef, useState } from 'react';
import { scrollToBottom, useReceivedMessage } from '../hooks';
import { changeInfo } from '@/utils';

export default function ChatBox() {
  const [isOpenChatModal, setIsOpenChatModal] = useState({
    chat: false,
  });
  const { value: token } = useLocalStorage('accessToken');
  const belongToChatRoom = ChatQueries.useGetBelongToChatRoom();

  const socket = useSocket();
  const { onMessageReceived } = useReceivedMessage();

  const scrollToBottomRef = useRef<HTMLDivElement>(null);

  const handlerOpenChatModal = changeInfo.toggle({
    setState: setIsOpenChatModal,
    key: 'chat',
  });

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
    if (isOpenChatModal) {
      scrollToBottom(scrollToBottomRef);
    }
  }, [isOpenChatModal]);

  if (!token) return;

  return (
    <>
      <S.ButtonWrapper onClick={handlerOpenChatModal}>
        <Svg.ChatIcon size={40} />
      </S.ButtonWrapper>
      {isOpenChatModal.chat && (
        <ChatRoomModal
          closeChatModal={handlerOpenChatModal}
          belongToChatRoom={belongToChatRoom}
          socket={socket}
          scrollToBottomRef={scrollToBottomRef}
        />
      )}
    </>
  );
}
