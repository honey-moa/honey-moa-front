import { instanceToken } from '../axiosInstance';
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
