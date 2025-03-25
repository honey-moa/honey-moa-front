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
import { changeInfo, date } from '@/utils';
import { useMemo, useState } from 'react';
import { useReceivedMessage, useScrollToBottom } from '../hooks';
import useObserver from '@/hook/useObserver';

export default function ChatRoomModal({
  setIsOpen,
  belongToChatRoomData,
  socket,
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

  //타입 가드
  const isString = (value: unknown): value is string => {
    return typeof value === 'string';
  };
  const messages = useChattingMessagePagination({
    id: isString(belongToChatRoomData?.id) ? belongToChatRoomData.id : '',
    orderBy: JSON.stringify(['createdAt:desc']),
  });

  const messagesContents = useMemo(() => {
    return messages?.data?.pages.flatMap(page => page.contents) || [];
  }, [messages?.data?.pages]);

  const { obsRef } = useObserver({
    event: () => {
      messages?.fetchNextPage();
    },
    threshold: 0.1,
  });
  const { onMessageReceived } = useReceivedMessage();
  const { scrollToBottomRef } = useScrollToBottom({
    dependencies: [onMessageReceived],
    isLoadingPastData: messages?.isFetchingNextPage,
  });

  const onChangeMessage = changeInfo.text({ setState: setChatInfo });

  const sendMessageToServer: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    socket?.emit(
      'send_message',
      {
        roomId: belongToChatRoomData?.id,
        message: chatInfo.message,
      },
      onMessageReceived
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
