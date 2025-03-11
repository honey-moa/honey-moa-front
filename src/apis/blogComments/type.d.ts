type SortKey = 'id' | 'createdAt' | 'updatedAt';
type SortValue = 'asc' | 'desc';
type OrderByType = `${SortKey} ${SortValue}`;

export interface BlogCommentBaseParamsType {
  id: string | undefined;
}

export interface BlogCommentPaginationParams extends BlogCommentBaseParamsType {
  page?: number;
  limit?: number;
  orderBy?: OrderByType[];
  cursor?: string[];
}

export interface PostBlogCommentParams extends BlogCommentBaseParamsType {
  content: string;
}

export interface PatchBlogCommentParams extends BlogCommentBaseParamsType {
  blogPostCommentId: string | undefined;
  content: string;
}

export interface BlogCommentContentsType {
  id: string;
  blogPostId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    nickname: string;
    createdAt: string;
    updatedAt: string;
    profileImageUrl: string;
  };
}

export interface BlogCommentPaginationResponseType {
  contents: BlogCommentContentsType[];
  limit: number;
  totalCount: number;
  currentPage: number;
  hasNext: boolean;
  lastPage: number;
  nextPage: number;
}
