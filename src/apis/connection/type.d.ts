export interface GetAllUsersParams {
  value: string;
  cursor?: string;
  page?: number;
  limit?: number;
  isEmailVerified?: boolean | null;
  orderBy?: string;
}

export interface GetAllUsersReturn {
  totalCount: number;
  limit: number;
  contents: Array<EachUserInfo>;
  nextCursor: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface PostConnectionReturn {
  id: string;
}

export interface EachUserInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  email: string;
  loginType: string;
  mbti: string;
  isEmailVerified: boolean;
  profileImageUrl: string;
}
export interface GetConnectionReturn {
  totalCount: number;
  limit: number;
  currentPage: number1;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
  contents: ConnectionListContent[];
}

export type ConnectionUserType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
};

export type ConnectionFeature = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type ConnectionStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'DISCONNECTED'
  | 'CANCELED';

type PaginationOrderBy = `${string}: ${'ASC' | 'DESC'}`;
export interface ConnectionPaginationParams {
  page: number;
  limit: number;
  showRequest: boolean;
  showRequested: boolean;
  status: ConnectionStatus;
  orderBy: PaginationOrderBy[];
}
export interface ConnectionListContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  requester?: ConnectionUserType;
  requesterId: string;
  requested?: ConnectionUserType;
  requestedId: string;
  status: ConnectionStatus;
  blog?: ConnectionFeature;
  chatRoom?: ConnectionFeature;
}
