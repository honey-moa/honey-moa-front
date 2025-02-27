import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function SearchErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'INVALID_REQUEST_PARAMETER')
    return '이메일을 다시 확인해 주세요.';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
}

export function PostConnectionErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'CANNOT_CREATE_CONNECTION_MYSELF')
    return '본인의 아이디에 연결 요청 할 수 없습니다.';
  if (code === 'CANNOT_CREATE_CONNECTION_TARGET_EMAIL_NOT_VERIFIED')
    return '해당 사용자의 이메일이 인증되지 않았습니다.';
  if (code === 'RESOURCE_NOT_FOUND') return '존재하지 않는 유저입니다.';
  if (code === 'REQUESTER_ALREADY_HAVE_CONNECTION')
    return '여러명과 연결 할 수 없습니다.';
  if (code === 'EMAIL_NOT_VERIFIED') return '이메일 인증 후 시도해주세요';
  if (code === 'REQUESTED_USER_ALREADY_HAVE_CONNECTION')
    return '이미 연결 된 사용자입니다.';
  if (code === 'REQUESTER_ALREADY_SENT_PENDING_CONNECTION')
    return '이미 대기중인 요청이 있습니다. 이전 요청을 취소하고 다시 시도해 주세요.';
}

export function GetConnectionListErrorHandler(error: AxiosError) {
  interface ErrorResponseExtend extends ErrorResponse {
    status: number;
  }
  const responseData = error.response?.data as ErrorResponseExtend;
  const code = responseData?.code;
  const status = responseData?.status;

  if (status === 400) return '다시 시도해주세요';
  if (code === 'INVALID_TOKEN') return '다시 로그인 후 시도해주세요';
}

export function GetConnectionDetailErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'INVALID_REQUEST_PARAMETER')
    return '연결 조회 중 요류가 발생했습니다';
  if (code === 'INVALID_TOKEN') return '다시 로그인 후 시도해 주세요';
  if (code === 'RESOURCE_NOT_FOUND') return '연인과 연결이 필요합니다';
}

export function deleteConnectionErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'INVALID_REQUEST_PARAMETER')
    return '연결 삭제 중 오류가 발생했습니다';
  if (code === 'YOU_ARE_NOT_PART_OF_A_CONNECTION')
    return '연결에 속한 계정이 아닙니다.';
  if (code === 'CANNOT_DISCONNECT_CONNECTION_REQUEST_NOT_ACCEPTED')
    return '연결된 계정이 존재하지 않습니다. 연결을 먼저 진행해주세요.';
  if (code === 'INVALID_TOKEN') return '다시 로그인 후 시도해 주세요';
  if (code === 'RESOURCE_NOT_FOUND') return '연결이 존재하지 않습니다';
}
