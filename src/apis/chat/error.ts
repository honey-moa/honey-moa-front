import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function PostChatRoomErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData.code;

  if (code === 'INVALID_REQUEST_PARAMETER') return 'Connection Id 오류';
  if (code === 'INVALID_TOKEN') return '다시 로그인 후 시도해주세요';
  if (code === 'YOU_DO_NOT_HAVE_AN_ACCEPTED_CONNECTION')
    return '연결 후 시도해주세요';
  if (code === 'RESOURCE_NOT_FOUND')
    return '존재하지 않는 유저 혹은 연결 입니다.';
  if (code === 'YOU_ALREADY_HAVE_A_CHAT_ROOM')
    return '이미 채팅방이 존재합니다.';
}

export function GetChatRoomErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData.code;

  if (code === 'INVALID_TOKEN') return '다시 로그인 후 시도해주세요';
  if (code === 'RESOURCE_NOT_FOUND')
    return '채팅방을 찾을 수 없습니다. 다시 시도해주세요';
}

export function GetChatMessageErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData.code;

  if (code === 'INVALID_REQUEST_PARAMETER' || code === 'INVALID_JSON_FORMAT')
    return '다시 시도해주세요';
  if (code === 'INVALID_TOKEN') return '로그인 후 이용해 주세요';
  if (code === 'PERMISSION_DENIED') return '채팅방에 접근할 수 없습니다.';
  if (code === 'RESOURCE_NOT_FOUND') return '존재하지 않는 채팅방입니다.';
}
