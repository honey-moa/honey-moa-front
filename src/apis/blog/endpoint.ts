import { instanceToken } from '../axiosInstance';
import {
  BlogHoneyType,
  BlogSingleInfoReturn,
  BlogSingleParamsType,
  CreateBlogParams,
  CreateBlogReturn,
  CreateNewBLogPostParams,
  CreateNewBlogPostReturn,
  DeleteBlogPostParams,
  EditBlogProfileParams,
  PaginationBaseType,
  PaginationOffsetType,
  PrivateBlogPaginationType,
  UpdateBlogPostParams,
} from './type';

//블로그 생성 api
export async function postCreateBlog(
  blogInfo: CreateBlogParams
): Promise<CreateBlogReturn> {
  const response = await instanceToken.post('/blogs', blogInfo);
  return response.data;
}

//블로그 단일 조회
export async function getSingleBlog({
  id,
}: BlogSingleParamsType): Promise<BlogSingleInfoReturn> {
  const response = await instanceToken.get(`/users/${id}/blog`);
  return response.data;
}

//블로그 커플 정보 수정
export async function patchBlogCoupleInfo({
  blogId,
  formData,
}: EditBlogProfileParams): Promise<void> {
  const response = await instanceToken.patch(`/blogs/${blogId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

//블로그 게시글 생성
export async function CreateNewBlogPost({
  id,
  ...params
}: CreateNewBLogPostParams): Promise<CreateNewBlogPostReturn> {
  const response = await instanceToken.post(`/blogs/${id}/blog-posts`, params);
  return response.data;
}

//블로그 게시글 수정
export async function updateBlogPost({
  blogId,
  postId,
  ...params
}: UpdateBlogPostParams): Promise<void> {
  const response = await instanceToken.patch(
    `/blogs/${blogId}/blog-posts/${postId}`,
    params
  );
  return response.data;
}

//블로그 게시글 삭제
export async function deleteBlogPost({ blogId, postId }: DeleteBlogPostParams) {
  const response = await instanceToken.delete(
    `/blogs/${blogId}/blog-posts/${postId}`
  );
  return response.data;
}

export async function getBlogHoney({
  id,
}: Pick<BlogHoneyType, 'id'>): Promise<BlogHoneyType> {
  const response = await instanceToken.get(`/blog-posts/${id}`);
  return response.data;
}

//private 블로그 pagination
export async function getPrivateBlogListPagination({
  id,
  limit = 20,
  showPrivatePosts,
  ...params
}: PrivateBlogPaginationType): Promise<PaginationOffsetType> {
  const response = await instanceToken.get(`/blogs/${id}/blog-posts`, {
    params: {
      limit,
      showPrivatePosts,
      ...params,
    },
  });
  return response.data;
}

//공개된 블로그 게시글 pagination
export async function getPublicBlogListPagination({
  limit = 12,
  ...params
}: Omit<PaginationBaseType, 'id'>): Promise<PaginationOffsetType> {
  const response = await instanceToken.get('/blog-posts', {
    params: {
      limit,
      ...params,
    },
  });
  return response.data;
}
