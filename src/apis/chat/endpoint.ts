import { instanceToken } from '../axiosInstance';
import { PaginationBaseType } from '../blog/type';
import { ChatMessagePaginationType } from './type';
import { BelongToMeChatRoomReturnType, CreateChatRoomReturnType } from './type';

//채팅방 생성 api
export async function postCreateChatRoom(): Promise<CreateChatRoomReturnType> {
  const response = await instanceToken.post('/chat-rooms');
  return response.data;
}

//생성한 채팅방 조회
export async function getBelongToChatRoom(): Promise<BelongToMeChatRoomReturnType> {
  const response = await instanceToken.get('/users/me/chat-room');
  return response.data;
}

//채팅 조회
export async function getChatRoomPagination({
  id,
  limit = 20,
  ...params
}: PaginationBaseType): Promise<ChatMessagePaginationType> {
  const response = await instanceToken.get(`/chat-rooms/${id}/messages`, {
    params: {
      limit,
      ...params,
    },
  });
  return response.data;
}
