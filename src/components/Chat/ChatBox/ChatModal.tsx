import * as S from './style';
import { Svg } from '@/components/Svg';
import { ChatQueries } from '@/apis/chat';
import { toast } from 'react-toastify';
import { ChatModalProps } from './type';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Profile } from '@/components/Layouts';
import { useChattingMessagePagination } from '@/apis/chat/queries';
import { changeInfo, date } from '@/utils';
import { useEffect, useMemo, useState } from 'react';
import { useReceivedMessage } from '../hooks';
import useObserver from '@/hook/useObserver';
import { scrollToBottom } from '../utils';
import { ChatAckResponse } from '../type';

export default function ChatRoomModal({
  closeChatModal,
  belongToChatRoom,
  socket,
  scrollToBottomRef,
}: ChatModalProps) {
  const createChatRoom = ChatQueries.usePostCreateChatRoom();
  const myInfo = UserQueries.GetMyInfoQuery();
  const blogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const [isAtBottom, setIsAtBottom] = useState(true); // 스크롤이 하단에 있는지 추적

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

  //타입 가드
  const isString = (value: unknown): value is string => {
    return typeof value === 'string';
  };
  const messages = useChattingMessagePagination({
    id: isString(belongToChatRoom?.id) ? belongToChatRoom.id : '',
    orderBy: JSON.stringify(['createdAt:desc']),
  });

  const messagesContents = useMemo(() => {
    return messages?.data?.pages.flatMap(page => page.contents) || [];
  }, [messages?.data?.pages]);

  const { obsRef } = useObserver({
    event: async () => {
      if (!messages?.data?.pages.length) return;

      const lastPage = messages.data.pages[messages.data.pages.length - 1];

      if (lastPage.nextCursor !== null) {
        const prevHeight = scrollToBottomRef.current?.scrollHeight || 0;

        await messages.fetchNextPage();

        setTimeout(() => {
          if (scrollToBottomRef.current) {
            const newHeight = scrollToBottomRef.current.scrollHeight;
            scrollToBottomRef.current.scrollTop += newHeight - prevHeight;
          }
        }, 0);
      }
    },
    threshold: 0.1,
  });
  const { onMessageReceived } = useReceivedMessage();

  // 스크롤 위치 체크
  useEffect(() => {
    const handleScroll = () => {
      const chatBody = scrollToBottomRef.current;
      if (chatBody) {
        const { scrollTop, scrollHeight, clientHeight } = chatBody;
        setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
      }
    };

    const chatBody = scrollToBottomRef.current;
    if (chatBody) {
      chatBody.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (chatBody) {
        chatBody.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // 처음 로드 시와 새 메시지 수신 시 스크롤 제어
  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom(scrollToBottomRef);
    }
  }, [messagesContents, isAtBottom]);

  const sendMessageToServer: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    socket?.emit(
      'send_message',
      {
        roomId: belongToChatRoom?.id,
        message: chatInfo.message,
      },
      (res: ChatAckResponse) => {
        setIsAtBottom(true);
        scrollToBottom(scrollToBottomRef);
        onMessageReceived(res);
      }
    );
    setChatInfo({ message: '' });
  };

  const onChangeMessage = changeInfo.text({ setState: setChatInfo });

  if (belongToChatRoom === undefined)
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
          <S.IconWrapper onClick={closeChatModal}>
            <Svg.CloseIcon />
          </S.IconWrapper>
        </S.ChatControl>
      </S.ChatHeader>
      <S.ChatBody ref={scrollToBottomRef}>
        <S.ObserverBox ref={obsRef} />
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
