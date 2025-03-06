import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function newBlogPostCommentErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code, errors } = responseData;
  if (
    errors[0].reason === 'content must be longer than or equal to 1 characters'
  )
    return '댓글은 1자 이상 입력이 필요합니다.';
  if (code === 'EMAIL_NOT_VERIFIED')
    return '이메일 인증이 되지 않았습니다. 이메일 인증 후 이용해 주세요.';
  if (code === 'YOU_ARE_NOT_PART_OF_A_CONNECTION')
    return '게시글에 접근 권한이 없습니다.';
}
