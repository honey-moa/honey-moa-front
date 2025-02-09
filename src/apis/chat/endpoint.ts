import { instanceToken } from '../axiosInstance';
import {
  PostChatRoomReturn,
  GetChatRoomReturn,
  GetChatMessageReturn,
} from './type';

// 최초 채팅방 생성 api
export async function postChatRoom(): Promise<PostChatRoomReturn> {
  const response = await instanceToken.post('/chat-rooms');

  return response.data;
}

// 채팅방 조회 api
export async function getChatRoom(): Promise<GetChatRoomReturn> {
  const response = await instanceToken.get('/users/me/chat-room');

  return response.data;
}

// 채팅 내역 조회 api
export async function getChatMessage(
  id: string
): Promise<GetChatMessageReturn> {
  const response = await instanceToken.get(`/chat-rooms/${id}/messages`);

  return response.data;
}
