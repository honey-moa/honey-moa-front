import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthEndPoint } from '.';
import { AxiosError } from 'axios';
import useLocalStorage from '@/hook/useLocalStorage';
import { toast } from 'react-toastify';

/** 로그인 쿼리 */
export const useLoginQuery = () => {
  const { set: setToken } = useLocalStorage('accessToken');
  const { set: setRefreshToken } = useLocalStorage('refreshToken');
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postToken,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ['auth-sign-in'],
      });
      queryClient.clear();
      setToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      toast.success('로그인 성공');
    },
    onError: (error: AxiosError) => error,
  });
};

/** 회원가입 쿼리 */
export const RegisterQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postUserRegister,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['auth-sign-up'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};

/**비밀번호 변경을 위한 이메일 인증 쿼리 */
export const SendEmailForChangePwQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postEmailForChangePw,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['user-verify-tokens'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};

/**비밀번호 변경을 위한 쿼리 */
export const ChangePasswordQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.putChangePassword,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['password-change'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};

/**토큰 재발급 */
export const ReissueAccessTokenMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.reissueAccessToken,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['reissue-access-token'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};
