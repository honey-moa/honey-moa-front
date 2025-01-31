export interface ChatRoomReturn {
  id: string;
}

export interface ChatMessageReturn {
  totalCount: number;
  limit: number;
  contents: ChatMessageContent[];
  nextCursor: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ChatMessageContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  roomId: number;
  senderId: number;
  message: string;
}
