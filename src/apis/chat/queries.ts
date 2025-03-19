import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChatEndPoint } from '.';
import { toast } from 'react-toastify';
import {
  createChatRoomsErrorHandler,
  getBelongToChatRoomErrorHandler,
} from './error';
import { AxiosError } from 'axios';

export function usePostCreateChatRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ChatEndPoint.postCreateChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['chat-rooms'],
      });
    },
    onError: error => {
      toast.error(createChatRoomsErrorHandler(error as AxiosError));
    },
  });
}

export function useGetBelongToChatRoom() {
  const { data, isError, error } = useQuery({
    queryKey: ['chat-rooms', 'me'],
    queryFn: ChatEndPoint.getBelongToChatRoom,
    refetchOnWindowFocus: false,
  });
  if (isError && error) {
    toast.error(getBelongToChatRoomErrorHandler(error as AxiosError));
    return;
  }
  return data;
}
