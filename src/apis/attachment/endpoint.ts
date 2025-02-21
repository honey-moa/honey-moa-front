import { instanceToken } from '../axiosInstance';
import { AttachmentReturn, AttachmentsType } from './type';

export async function postAttachments({
  formData,
}: AttachmentsType): Promise<AttachmentReturn> {
  const response = await instanceToken.post('/attachments', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data[0];
}
