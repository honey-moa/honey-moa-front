import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function createChatRoomsErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code } = responseData;
  if (code === 'YOU_DO_NOT_HAVE_AN_ACCEPTED_CONNECTION')
    return '맺어진 연결이 존재하짇 않습니다. 이미 연결으 진행하셨다면, 새로고침 후 시도해 주세요.';
  if (code === 'RESOURCE_NOT_FOUND') return '유저가 존재하지 않습니다.';
}

export function getBelongToChatRoomErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code } = responseData;
  if (code === 'RESOURCE_NOT_FOUND') return '채팅방이 존재하지 않습니다. ';
}
