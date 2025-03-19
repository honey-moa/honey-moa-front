export interface CreateChatRoomReturnType {
  id: string;
}

export interface BelongToMeChatRoomReturnType {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  connectionId: string;
}

export interface ChatMessagePaginationType {
  totalCount: number;
  limit: number;
  contents: {
    id: string;
    createdAt: string;
    updatedAt: string;
    roomId: string;
    senderId: string;
    message: string;
    blogPostUrl: string;
  }[];
  currentPage: number;
  nextPage: number;
  lastPage: number;
  hasNext: boolean;
  nextCursor: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}
