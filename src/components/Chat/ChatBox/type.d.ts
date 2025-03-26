import {
  BelongToMeChatRoomReturnType,
  ChatMessagePaginationType,
} from '@/apis/chat/type';
import { Socket } from 'socket.io-client';

export interface ChatModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  belongToChatRoomData: BelongToMeChatRoomReturnType | undefined;
  socket: Socket | null;
  scrollToBottomRef: React.RefObject<HTMLDivElement>;
}

export interface ChatMessageListType {
  id: string;
  createdAt: string;
  updatedAt: string;
  roomId: string;
  senderId: string;
  message: string;
  blogPostUrl: string | null;
}

export interface ChatServerBaseResponse {
  message: string;
  roomId: string;
  blogPostUrl: string;
}

export interface ChatCurrentDataType {
  pageParam: Array;
  pages: ChatMessagePaginationType[];
}

export interface ChatAckResponse {
  statusMessage: string;
  sentMessage: ChatMessageListType;
}
