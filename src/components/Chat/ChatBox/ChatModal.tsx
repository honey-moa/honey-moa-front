import * as S from './style';
import { Link } from 'react-router-dom';
import { Svg } from '@/components/Svg';
import { ChatQueries } from '@/apis/chat';
import { toast } from 'react-toastify';
import { ChatModalProps } from './type';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Profile } from '@/components/Layouts';
import { useChattingMessagePagination } from '@/apis/chat/queries';
import useObserver from '@/hook/useObserver';
import { changeInfo, date } from '@/utils';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import useLocalStorage from '@/hook/useLocalStorage';

export default function ChatRoomModal({
  setIsOpen,
  belongToChatRoomData,
}: ChatModalProps) {
  const createChatRoom = ChatQueries.usePostCreateChatRoom();
  const myInfo = UserQueries.GetMyInfoQuery();
  const blogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const [chatInfo, setChatInfo] = useState({
    message: '',
  });

  const onClickStartChatting = () => {
    createChatRoom.mutate(undefined, {
      onSuccess: () => {
        toast.success('채팅방이 생성되었습니다.');
      },
    });
  };

  const messages = useChattingMessagePagination({
    id: isString(belongToChatRoomData?.id) ? belongToChatRoomData.id : '',
    orderBy: JSON.stringify(['createdAt:desc']),
  });

  //타입 가드
  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  const messagesContents = messages?.data?.pages.flatMap(page => page.contents);

  const { obsRef } = useObserver({
    event: () => {
      messages?.fetchNextPage();
    },
    threshold: 0.1,
  });

  const onChangeMessage = changeInfo.text({ setState: setChatInfo });

  const [socket, setSocket] = useState<Socket | null>(null);
  const { value: token } = useLocalStorage('accessToken');
  const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

  const connectedSocketServer = () => {
    const _socket = io(`${SOCKET_SERVER_URL}`, {
      autoConnect: false,
      extraHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
    _socket.connect();
    setSocket(_socket);
  };

  const onMessageReceived = (data: string) => {
    console.log(data);
  };

  const sendMessageToServer = () => {
    console.log(`send message: ${chatInfo.message}`);
    socket?.emit(
      'send_message',
      {
        chatRoomId: belongToChatRoomData?.id,
        message: chatInfo.message,
      },
      (res: string) => {
        console.log(res);
      }
    );
    setChatInfo({ message: '' });
  };

  useEffect(() => {
    socket?.emit(
      'enter_chat_room',
      {
        roomId: belongToChatRoomData?.id,
      },
      (res: string) => {
        console.log(res);
      }
    );
    socket?.on('receive_message', onMessageReceived);
    return () => {
      socket?.off('receive_message', onMessageReceived);
    };
  }, [socket]);

  if (belongToChatRoomData === undefined)
    return (
      <S.BeforeChattingStartBox>
        <button onClick={onClickStartChatting}>연인과 채팅 시작하기</button>
      </S.BeforeChattingStartBox>
    );

  return (
    <S.ChatBox>
      <S.ChatHeader>
        <button onClick={connectedSocketServer}>접속</button>
        <S.ChatInfo>
          <Profile.TogetherImage members={blogInfo?.members} width="32px" />
          <span></span>
        </S.ChatInfo>
        <S.ChatControl>
          <S.IconWrapper onClick={() => setIsOpen(false)}>
            <Link to="/chat">
              <Svg.FullIcon />
            </Link>
          </S.IconWrapper>
          <S.IconWrapper onClick={() => setIsOpen(false)}>
            <Svg.CloseIcon />
          </S.IconWrapper>
        </S.ChatControl>
      </S.ChatHeader>
      <S.ChatBody>
        {messages?.isPending ? (
          <div>로딩중...</div>
        ) : (
          <S.ObserverBox ref={obsRef}></S.ObserverBox>
        )}
        {messagesContents?.reverse().map(message => {
          const isOwner = message.senderId === myInfo?.id;
          return (
            <S.ChatMessage key={message.id}>
              <S.ChatContentsWrapper $isOwner={isOwner}>
                {!isOwner ? (
                  <>
                    <div>{message.message}</div>
                    <span>
                      {date.getFormattingTime({
                        time: message.createdAt,
                        formatType: '오전오후',
                      })}
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      {date.getFormattingTime({
                        time: message.createdAt,
                        formatType: '오전오후',
                      })}
                    </span>
                    <div>{message.message}</div>
                  </>
                )}
              </S.ChatContentsWrapper>
            </S.ChatMessage>
          );
        })}
      </S.ChatBody>
      <S.ChatOperate>
        <S.FormAttachBox>
          <S.IconWrapper>
            <Svg.FileIcon />
          </S.IconWrapper>
          <S.IconWrapper>
            <Svg.EmojiIcon />
          </S.IconWrapper>
        </S.FormAttachBox>
        <S.ChatForm>
          <S.ChatInput
            placeholder="메시지를 입력하세요..."
            id="message"
            onChange={onChangeMessage}
            value={chatInfo.message}
          />
          <S.SendIconButton onClick={sendMessageToServer} type="button">
            <Svg.SendIcon />
          </S.SendIconButton>
        </S.ChatForm>
      </S.ChatOperate>
    </S.ChatBox>
  );
}
