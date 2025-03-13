import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function createAttachmentErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  console.log(responseData);
  if (
    responseData.errors[0].reason ===
    'File must be of one of the types image/png, image/jpeg, video/mp4, video/quicktime'
  )
    return '이미지 형식은 png, jpeg만, 비디오 형식은 mp4, quicktime만 가능합니다';
  if (responseData.errors[0].reason === 'Maximum file size is 10485760')
    return '파일은 최대 10MB까지 업로드 가능합니다';
  if (
    responseData.errors[0].reason ===
    'files must contain no more than 1 elements'
  )
    return '이미지는 한 번에 한 장만 업로드 가능합니다';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 로그인 후 시도해 주세요';
}
