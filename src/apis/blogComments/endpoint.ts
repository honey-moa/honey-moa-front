import { instanceToken } from '../axiosInstance';
import {
  BlogCommentPaginationParams,
  BlogCommentPaginationResponseType,
  PatchBlogCommentParams,
  PostBlogCommentParams,
} from './type';

//댓글 조회
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

//댓글 추가
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

//댓글 수정
export async function patchBlogPostComments({
  id,
  blogPostCommentId,
  content,
}: PatchBlogCommentParams) {
  const response = await instanceToken.patch(
    `/blog-posts/${id}/blog-post-comments/${blogPostCommentId}`,
    { content }
  );
  return response.data;
}

//댓글 삭제
export async function deleteBlogPostComments({
  id,
  blogPostCommentId,
}: Omit<PatchBlogCommentParams, 'content'>) {
  const response = await instanceToken.delete(
    `/blog-posts/${id}/blog-post-comments/${blogPostCommentId}`
  );
  return response.data;
}
