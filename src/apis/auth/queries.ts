import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthEndPoint } from '.';
import { AxiosError } from 'axios';

/** 로그인 쿼리 */
export const useLoginQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postToken,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['auth-sign-in'],
      });
      queryClient.clear();
    },
    onError: (error: AxiosError) => error,
  });
};

/** 회원가입 쿼리 */
export const useRegisterQuery = () => {
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
export const useSendEmailForChangePwQuery = () => {
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
export const useChangePasswordQuery = () => {
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
