import { ChatMessagePaginationType } from '@/apis/chat/type';
import { Socket } from 'socket.io-client';

export interface ChatMessageListType {
  id: string;
  createdAt: string;
  updatedAt: string;
  roomId: string;
  senderId: string;
  message: string;
  blogPostUrl: string | null;
}

export interface ChatCurrentDataType {
  pageParam: Array;
  pages: ChatMessagePaginationType[];
}

export interface UseMessageListenerPrams {
  roomId: string | undefined;
  scrollToBottomRef: React.RefObject<HTMLDivElement>;
  socket: Socket | null;
}
