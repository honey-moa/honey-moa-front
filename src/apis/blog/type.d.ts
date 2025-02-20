import { PaginationContents } from '@/components/Blog/BlogList/type';

export interface CreateBlogParams {
  name: string;
  description: string;
  dDayStartDate: string;
}

export interface CreateBlogReturn {
  id: string;
}

export interface BlogSingleParamsType {
  id?: string;
}

export interface BlogSingleInfoReturn {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  backgroundUrl: string;
  dDayStartDate: string;
  createdBy: number; //블로그 생성 유저
  connectionId: number;
  members: {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
    profileImageUrl: string;
  }[];
}

export interface CreateNewBLogPostParams {
  id: string;
  title: string;
  contents: object[];
  date: string;
  location: string;
  isPublic?: boolean;
  tagNames?: string[];
  fileUrls?: string[];
}

export interface CreateNewBlogPostReturn {
  id: string;
}

//블로그 Honey(unit) 타입
export interface BlogHoneyType {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  blogId: string;
  title: string;
  contents: object[];
  date: string;
  location: string;
  isPublic: boolean;
  tags: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
  }[];
}

type OrderByKey = 'id' | 'createdAt' | 'updatedAt';
type OrderByValue = 'acs' | 'desc';

type OrderByArrayType = `${OrderByKey}:${OrderByValue}`[];

type CursorKey = 'id' | 'createdAt' | 'updatedAt';
type CursorValue = string;

type CursorArrayType = `${CursorKey}:${CursorValue}`[];
//페이지네이션 타이
export interface PaginationBaseType {
  id: string;
  page?: number;
  limit?: number;
  title?: string; //필터링 할 제목(검색에 사용)
  orderBy?: OrderByArrayType;
  cursor?: CursorArrayType;
}

export interface PrivateBlogPaginationType extends PaginationBaseType {
  datePeriod?: string;
  showPrivatePosts?: boolean;
}

interface TagsType {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
}

interface BlogMembersType {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  profileImageUrl: string;
}

interface BlogInfoType {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  members: BlogMembersType[];
}

export interface PaginationReturnBaseType {
  totalCount: number;
  limit: number;
  contents: PaginationContents[];
}

export interface PaginationOffsetType extends PaginationReturnBaseType {
  currentPage: number;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
}

export interface PaginationCursorType extends PaginationReturnBaseType {
  nextCursor: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface InfiniteScrollReturnType {
  data?: PaginationOffsetType | unknown;
  hasNextPage?: boolean;
  isFetching?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<PaginationOffsetType | PaginationCursorType, unknown>,
      Error
    >
  >;
}
