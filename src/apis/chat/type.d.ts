type PostCreateChateRoomRetrun = {
  id: string;
};
export interface GetChatRoomReturn {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  connectionId: number;
}

export interface GetChatMessageReturn {
  totalCount: number;
  limit: number;
  contents: {
    id: string;
    createdAt: string;
    updatedAt: string;
    roomId: number;
    senderId: number;
    message: string;
    blogPostUrl: string;
  }[];

  nextCursor: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}
