import * as S from './style';
import { Link } from 'react-router-dom';
import { Svg } from '@/components/Svg';
import { ChatQueries } from '@/apis/chat';
import { toast } from 'react-toastify';
import {
  ChatCurrentDataType,
  ChatMessageListType,
  ChatModalProps,
  ChatServerBaseResponse,
} from './type';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Profile } from '@/components/Layouts';
import { useChattingMessagePagination } from '@/apis/chat/queries';
import useObserver from '@/hook/useObserver';
import { changeInfo, date } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function ChatRoomModal({
  setIsOpen,
  belongToChatRoomData,
  socket,
}: ChatModalProps) {
  const createChatRoom = ChatQueries.usePostCreateChatRoom();
  const myInfo = UserQueries.GetMyInfoQuery();
  const blogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);
  const messageRef = useRef<HTMLDivElement>(null);

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
    event: async () => {
      await messages?.fetchNextPage();
    },
    threshold: 0.1,
  });

  const scrollToBottom = () => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const queryClient = useQueryClient();

  const transformPaginatedData = (oldData: ChatCurrentDataType) => {
    console.log(oldData);
    if (!oldData) return oldData;

    return {
      ...oldData,
      pages: oldData.pages.map(page => ({
        totalCount: page.totalCount,
        limit: page.limit,
        contents: page.contents,
        nextCursor: page.nextCursor,
      })),
    };
  };

  const onMessageReceived = (data: ChatMessageListType) => {
    queryClient.setQueryData(
      ['chat-rooms', belongToChatRoomData?.id, 'messages'],
      (oldData: ChatCurrentDataType) => {
        const transformedData = transformPaginatedData(oldData);
        if (!oldData) return oldData;
        return {
          ...transformedData,
          pages: transformedData.pages.map((page, index) => {
            if (index === 0) {
              return {
                ...page,
                contents: [
                  {
                    id: null,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    roomId: data.roomId,
                    senderId: data.senderId,
                    message: data.message,
                    blogPostUrl: '',
                  },
                  ...page.contents,
                ],
              };
            }
            return page;
          }),
        };
      }
    );
  };

  const onChangeMessage = changeInfo.text({ setState: setChatInfo });

  useEffect(() => {
    socket?.on('receive_message', onMessageReceived);
    return () => {
      socket?.off('receive_message', onMessageReceived);
    };
  }, [socket]);

  const sendMessageToServer: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    socket?.emit(
      'send_message',
      {
        roomId: belongToChatRoomData?.id,
        message: chatInfo.message,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (res: Partial<ChatServerBaseResponse>) => {
        queryClient.setQueryData(
          ['chat-rooms', belongToChatRoomData?.id, 'messages'],
          (oldData: ChatCurrentDataType) => {
            const transformedData = transformPaginatedData(oldData);
            if (!oldData) return oldData;
            return {
              ...transformedData,
              pages: transformedData.pages.map((page, index) => {
                if (index === 0) {
                  return {
                    ...page,
                    contents: [
                      {
                        id: null,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        roomId: belongToChatRoomData?.id,
                        senderId: myInfo?.id,
                        message: chatInfo.message,
                        blogPostUrl: '',
                      },
                      ...page.contents,
                    ],
                  };
                }
                return page;
              }),
            };
          }
        );
      }
    );
    setChatInfo({ message: '' });
  };

  if (belongToChatRoomData === undefined)
    return (
      <S.BeforeChattingStartBox>
        <button onClick={onClickStartChatting}>연인과 채팅 시작하기</button>
      </S.BeforeChattingStartBox>
    );

  return (
    <S.ChatBox>
      <S.ChatHeader>
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
      <S.ChatBody ref={messageRef}>
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
        <S.ChatForm onSubmit={sendMessageToServer}>
          <S.ChatInput
            placeholder="메시지를 입력하세요..."
            id="message"
            onChange={onChangeMessage}
            value={chatInfo.message}
            autoComplete="off"
          />
          <S.SendIconButton type="submit">
            <Svg.SendIcon />
          </S.SendIconButton>
        </S.ChatForm>
      </S.ChatOperate>
    </S.ChatBox>
  );
}
