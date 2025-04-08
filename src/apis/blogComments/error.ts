import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function newBlogPostCommentErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code, errors } = responseData;
  if (code === 'EMAIL_NOT_VERIFIED')
    return '이메일 인증이 되지 않았습니다. 이메일 인증 후 이용해 주세요.';
  if (
    errors[0].reason === 'content must be longer than or equal to 1 characters'
  )
    return '댓글은 1자 이상 입력이 필요합니다.';
  if (code === 'YOU_ARE_NOT_PART_OF_A_CONNECTION')
    return '게시글에 접근 권한이 없습니다.';
}

export function updateBlogPostCommentErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code } = responseData;
  if (code === 'INVALID_REQUEST_PARAMETER')
    return '댓글은 1자 이상 255자 이하로 작성해야 합니다.';
  if (code === 'PERMISSION_DENIED')
    return '해당 댓글을 수정할 권한이 없습니다.';
  if (code === 'RESOURCE_NOT_FOUND')
    return '블로그가 삭제되었거나, 존재하지 않습니다. 새로고침 후 다시 시도해 주세요.';
}

export function deleteBlogPostCommentErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code } = responseData;
  if (code === 'PERMISSION_DENIED')
    return '해당 댓글을 삭제할 권한이 없습니다.';
  if (code === 'RESOURCE_NOT_FOUND')
    return '댓글이 이미 삭제되었거나, 존재하지 않습니다. 새로고침 후 다시 시도해 주세요.';
}
