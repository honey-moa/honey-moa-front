import { commonInstance } from '../axiosInstance';
import { ChatRoomReturn } from './type';

// 채팅방 생성 api
export async function postChatRoom(name: string): Promise<ChatRoomReturn> {
  const url = `/chat-rooms`;

  const response = await commonInstance.post(
    url,
    {
      name: 'test-chat-room-v1',
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return response.data;
}

// 채팅 기록 조회 api
// export async function getChatMessage(id: string): Promise<> {

// }
