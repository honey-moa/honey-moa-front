import * as S from './style';
import { Svg } from '@/components/Svg';
import useLocalStorage from '@/hook/useLocalStorage';
import ChatRoomModal from './ChatBox/ChatModal';
import { ChatQueries } from '@/apis/chat';
import { useEffect, useRef, useState } from 'react';
import { changeInfo } from '@/utils';
import { scrollToBottom } from './utils';
import { useMessageListener } from './hooks';
import { useSocket } from '@/hook/useSocket';

export default function ChatBox() {
  const [isOpenChatModal, setIsOpenChatModal] = useState(false);
  const { value: token } = useLocalStorage('accessToken');
  const belongToChatRoom = ChatQueries.useGetBelongToChatRoom();

  const scrollToBottomRef = useRef<HTMLDivElement>(null);
  const socket = useSocket();

  const handlerOpenChatModal = changeInfo.toggle({
    setState: setIsOpenChatModal,
  });

  useMessageListener({
    roomId: belongToChatRoom?.id,
    scrollToBottomRef,
    socket,
  });

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
      {isOpenChatModal && (
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
