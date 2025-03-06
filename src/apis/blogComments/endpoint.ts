import { instanceToken } from '../axiosInstance';
import {
  BlogCommentPaginationParams,
  BlogCommentPaginationResponseType,
  PostBlogCommentParams,
} from './type';

//블로그 게시글 댓글 조회
export async function getBlogPostCommentsPagination({
  limit = 5,
  ...params
}: BlogCommentPaginationParams): Promise<BlogCommentPaginationResponseType> {
  const response = await instanceToken.get(
    `/blog-posts/${params.id}/blog-post-comments`,
    {
      params: {
        limit,
        orderBy: JSON.stringify(['createdAt:desc']),
        ...params,
      },
    }
  );
  return response.data;
}

//블로그 게시글 댓글 추가
export async function postBlogPostComments({
  id,
  content,
}: PostBlogCommentParams) {
  const response = await instanceToken.post(
    `/blog-posts/${id}/blog-post-comments`,
    { content }
  );
  return response.data;
}
