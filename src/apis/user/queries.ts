import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { UserEndPoint } from '.';
import { toast } from 'react-toastify';
import {
  deleteUserErrorHandler,
  EditMyInfoErrorHandler,
  MyInfoErrorHandler,
  reissueEmailVerifyTokenErrorHandler,
} from './error';
import { AxiosError } from 'axios';

export function GetMyInfoQuery() {
  const { data, isError, error } = useSuspenseQuery({
    queryKey: ['users-me'],
    queryFn: UserEndPoint.getMyInfo,
    refetchOnWindowFocus: false,
  });
  if (isError) {
    toast.error(MyInfoErrorHandler(error as AxiosError));
    return;
  }
  return data;
}

export function EditMyInfoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UserEndPoint.patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-me'],
      });
      queryClient.invalidateQueries({
        queryKey: ['single-blog'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(EditMyInfoErrorHandler(error as AxiosError));
    },
  });
}

export function ReissueEmailVerifyTokenMutate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UserEndPoint.postReissueEmailVerifyToken,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['user-verify-email-tokens'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(reissueEmailVerifyTokenErrorHandler(error as AxiosError));
    },
  });
}

export function DeleteUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UserEndPoint.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-me'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(deleteUserErrorHandler(error));
    },
  });
}
