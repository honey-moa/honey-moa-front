import { instanceToken } from '../axiosInstance';
import {
  BlogHoneyType,
  BlogSingleInfoReturn,
  BlogSingleParamsType,
  CreateBlogParams,
  CreateBlogReturn,
  CreateNewBLogPostParams,
  CreateNewBlogPostReturn,
  PaginationOffsetType,
  PrivateBlogPaginationType,
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

//블로그 게시글 생성
export async function CreateNewBlogPost({
  id,
  ...params
}: CreateNewBLogPostParams): Promise<CreateNewBlogPostReturn> {
  const response = await instanceToken.post(`/blogs/${id}/blog-posts`, params);
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
  limit = 12,
  showPrivatePosts = true,
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
