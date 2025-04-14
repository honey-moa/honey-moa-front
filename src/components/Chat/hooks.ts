import { useQueryClient } from '@tanstack/react-query';
import {
  ChatCurrentDataType,
  ChatMessageListType,
  UseMessageListenerPrams,
} from './type';
import { useEffect } from 'react';
import { scrollToBottom } from './utils';

export const useReceivedMessage = () => {
  const queryClient = useQueryClient();

  const transformPaginatedData = (oldData: ChatCurrentDataType) => {
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
      ['chat-rooms', 'messages'],
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
                    id: data.id,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    roomId: data.roomId,
                    senderId: data.senderId,
                    message: data.message,
                    blogPostUrl: data.blogPostUrl,
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

  return { onMessageReceived };
};

export const useMessageListener = ({
  roomId,
  scrollToBottomRef,
  socket,
}: UseMessageListenerPrams) => {
  const { onMessageReceived } = useReceivedMessage();
  useEffect(() => {
    socket?.emit('enter_chat_room', { roomId });
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
};
