import { instanceToken } from '../axiosInstance';
import { ConnectionInfo } from '../user/type';
import {
  ConnectionPaginationParams,
  ConnectionStatus,
  GetAllUsersReturn,
  GetConnectionReturn,
  PostConnectionReturn,
} from './type';

//email을 통한 유저 검색 api
export async function getUserEmail(email: string): Promise<GetAllUsersReturn> {
  const url = !email ? '/users' : `/users?email=${email}`;
  const response = await instanceToken.get(url);

  return response.data;
}
//연결 요청 api
export async function postConnection(
  requestedId: string
): Promise<PostConnectionReturn> {
  const response = await instanceToken.post('/users/me/connections', {
    requestedId,
  });

  return response.data;
}
//연결 요청 리스트 조회
export async function getConnectionListPagination({
  page,
  limit,
  showRequest,
  showRequested,
  status,
  orderBy,
}: Partial<ConnectionPaginationParams>): Promise<GetConnectionReturn> {
  const response = await instanceToken.get('/users/me/connections', {
    params: {
      page,
      limit,
      showRequest,
      showRequested,
      status,
      orderBy,
    },
  });
  return response.data;
}

//연결 수락 거절 취소
export async function putConnection({
  status,
  id,
}: {
  status: ConnectionStatus;
  id: string;
  type?: 'requester' | 'requested';
}): Promise<void> {
  const response = await instanceToken.put(`/users/me/connections/${id}`, {
    status,
  });
  return response.data;
}

//연결 상세 조회
export async function getConnectionDetail(id: string): Promise<ConnectionInfo> {
  const response = await instanceToken.get(`/users/me/connections/${id}`);
  return response.data;
}

//연결 해제
export async function deleteConnection({
  id,
}: {
  id: string | undefined;
}): Promise<void> {
  const response = await instanceToken.delete(`/users/me/connections/${id}`);
  return response.data;
}
