import { useQuery } from '@tanstack/react-query';
import { ChatEndPoint } from '.';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GetChatMessageErrorHandler,
  GetChatRoomErrorHandler,
  PostChatRoomErrorHandler,
} from './error';

// 채팅방 생성 쿼리
export function ChatRoomQuery() {
  const { data, isError, error } = useQuery({
    queryKey: ['make-chat-room'],
    queryFn: () => ChatEndPoint.postChatRoom(),
  });
  if (isError && axios.isAxiosError(error)) {
    toast.error(PostChatRoomErrorHandler(error));
    return;
  }
  return data;
}

// 내 채팅방 정보 조회 쿼리
export function GetChatRoomQuery() {
  const { data, isError, error } = useQuery({
    queryKey: ['get-chat-room'],
    queryFn: () => ChatEndPoint.getChatRoom(),
  });

  if (isError && axios.isAxiosError(error)) {
    toast.error(GetChatRoomErrorHandler(error));
  }

  return data;
}

// 채팅 메세지 내역 조회 쿼리
export function GetChatMessageQuery(id: string) {
  const { data, isError, error } = useQuery({
    queryKey: ['get-chat-message', id],
    queryFn: () => ChatEndPoint.getChatMessage(id),
  });

  if (isError && axios.isAxiosError(error)) {
    toast.error(GetChatMessageErrorHandler(error));
  }

  return data;
}
