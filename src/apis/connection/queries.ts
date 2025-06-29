import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { ConnectionEndPoint } from '.';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import {
  deleteConnectionErrorHandler,
  GetConnectionDetailErrorHandler,
  GetConnectionListErrorHandler,
} from './error';
import {
  ConnectionListContent,
  ConnectionPaginationParams,
  GetAllUsersParams,
  GetConnectionReturn,
} from './type';

// 이메일 검색 쿼리
export function SearchQuery(params: GetAllUsersParams) {
  const response = useInfiniteQuery({
    queryKey: ['search-user', params.value],
    queryFn: ({ pageParam }: { pageParam?: string }) =>
      ConnectionEndPoint.getUserEmail({
        cursor: pageParam ? JSON.stringify([`id:${pageParam}`]) : undefined,
        ...params,
      }),
    initialPageParam: undefined,
    getNextPageParam: allPages => {
      return allPages.nextCursor !== null ? allPages.nextCursor.id : undefined;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
  return response;
}

// 연결 요청 쿼리
export function PostConnectionQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ConnectionEndPoint.postConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['post-connection'],
      });
    },
    onError: (error: AxiosError) => error,
  });
}

// 연결 리스트 페이지네이션
export function GetConnectionListPaginationQuery(
  params: Partial<ConnectionPaginationParams> & {
    isOpen?: boolean;
    type: 'requester' | 'requested';
  }
) {
  const { data, isError, error } = useQuery({
    queryKey: ['connection-list-pagination', params.type],
    queryFn: () => ConnectionEndPoint.getConnectionListPagination(params),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
  if (isError && axios.isAxiosError(error)) {
    toast.error(GetConnectionListErrorHandler(error));
    return;
  }
  return data;
}

// 연결 상세 조회 쿼리
export function GetConnectionDetailQuery(id: string) {
  const { isError, error } = useQuery({
    queryKey: ['connection-detail', id],
    queryFn: () => ConnectionEndPoint.getConnectionDetail(id),
  });
  if (isError && axios.isAxiosError(error)) {
    toast.error(GetConnectionDetailErrorHandler(error));
    return;
  }
}

//연결 수락 / 거절 / 취소
export function PutConnectionQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ConnectionEndPoint.putConnection,
    onMutate: async params => {
      await queryClient.cancelQueries({
        queryKey: ['connection-list-pagination', params.type],
      });

      const previousConnections = queryClient.getQueryData<
        ConnectionListContent[]
      >(['connection-list-pagination', params.type]);

      queryClient.setQueryData(
        ['connection-list-pagination', params.type],
        (oldData: GetConnectionReturn) => {
          return {
            ...oldData,
            contents: oldData.contents.filter(info => {
              return info.id !== params.id;
            }),
          };
        }
      );
      return { previousConnections, params };
    },
    onError: (error: AxiosError, _, context) => {
      queryClient.setQueryData(
        ['connection-list-pagination', context?.params.type],
        context?.previousConnections
      );
      return error;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['put-connection'] });
    },
  });
}

//유저 커넥션 해제 mutate
export function DeleteConnectionMutate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ConnectionEndPoint.deleteConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['delete-connection'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(deleteConnectionErrorHandler(error));
    },
  });
}
