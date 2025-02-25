import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AttachmentsEndPoint } from '.';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { createAttachmentErrorHandler } from './error';

export const useNewAttachmentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AttachmentsEndPoint.postAttachments,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['create-attachment'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createAttachmentErrorHandler(error));
    },
  });
};
