import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { ChatEndPoint } from '.';
import { toast } from 'react-toastify';
import {
  createChatRoomsErrorHandler,
  messagePaginationErrorHandler,
} from './error';
import { AxiosError } from 'axios';
import { PaginationBaseType } from '../blog/type';

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
  const { data } = useQuery({
    queryKey: ['chat-rooms', 'me'],
    queryFn: ChatEndPoint.getBelongToChatRoom,
    refetchOnWindowFocus: false,
  });
  return data;
}

export const useChattingMessagePagination = (params: PaginationBaseType) => {
  const response = useInfiniteQuery({
    queryKey: ['chat-rooms', params.id, 'messages'],
    queryFn: ({ pageParam }: { pageParam?: string }) =>
      ChatEndPoint.getChatRoomPagination({
        cursor: pageParam ? JSON.stringify([`id:${pageParam}`]) : undefined,
        ...params,
      }),
    initialPageParam: undefined,
    getNextPageParam: allPages => {
      return allPages.nextCursor !== null ? allPages.nextCursor.id : undefined;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!params.id,
    placeholderData: keepPreviousData,
  });
  if (response.isError) {
    toast.error(messagePaginationErrorHandler(response.error as AxiosError));
    return;
  }
  return response;
};
