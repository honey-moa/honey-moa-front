import { BelongToMeChatRoomReturnType } from '@/apis/chat/type';
import { Socket } from 'socket.io-client';

export interface ChatModalProps {
  closeChatModal: () => void;
  belongToChatRoom: BelongToMeChatRoomReturnType | undefined;
  socket: Socket | null;
  scrollToBottomRef: React.RefObject<HTMLDivElement>;
}

export interface ChatServerBaseResponse {
  message: string;
  roomId: string;
  blogPostUrl: string;
}
