import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function MyInfoErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'RESOURCE_NOT_FOUND')
    return '존재하지 않는 유저 입니다, 다시 시도해주세요.';
}

export function EditMyInfoErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER')
    return '수정한 파일 형태가 올바르지 않습니다';
  if (code === 'RESOURCE_NOT_FOUND') return '유저를 찾을 수 없습니다.';
}

export function reissueEmailVerifyTokenErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code } = responseData;
  if (code === 'ALREADY_VERIFIED_EMAIL') {
    return '이미 인증된 이메일입니다.';
  }
  if (code === 'CANNOT_RESEND_VERIFICATION_EMAIL_AN_HOUR') {
    return '요청하신 이메일로 이미 인증 메일을 보냈습니다. 이메일을 확인해 주세요.';
  }
}

export function deleteUserErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const { code } = responseData;
  if (code === 'RESOURCE_NOT_FOUND') {
    return '이미 삭제되었거나, 존재하지 않는 유저 입니다.';
  }
}
