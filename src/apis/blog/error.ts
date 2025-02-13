import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function createBlogErrorhandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER') return '형식에 맞게 작성해 주세요.';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'YOU_DO_NOT_HAVE_AN_ACCEPTED_CONNECTION')
    return '연인과 연결된 이력이 존재하지 않습니다. 다시 연결을 시도해 주세요.';
  if (code === 'RESOURCE_NOT_FOUND')
    return '유저 혹은 커넥션이 존재하지 않습니다.';
  if (code === 'YOU_ALREADY_HAVE_A_BLOG')
    return '이미 블로그가 생성된 유저 입니다.';
}

export function getSingleBlogErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER')
    return '유저 아이디가 잘못 되었습니다.';
}

export function createNewBlogPostErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER')
    return '글쓰기 형식을 확인해주세요.';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'OU_ARE_NOT_PART_OF_A_CONNECTION')
    return '해당 블로그의 연결에 속해있지 않습니다. 로그아웃 후 다시 시도해 보세요.';
  if (code === 'RESOURCE_NOT_FOUND')
    return '해당 아이디의 블로그가 존재하지 않습니다.';
}

export function getBlogHoneyErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER')
    return '해당 이야기 주소가 잘못되었거나, 존재하지 않습니다.';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'YOU_ARE_NOT_PART_OF_A_CONNECTION')
    return '해당 이야기를 읽을 권한이 없습니다.';
  if (code === 'RESOURCE_NOT_FOUND') return '해당 블로그는 존재하지 않습니다.';
}
