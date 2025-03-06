import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { BlogCommentsEndpoint } from '.';
import { BlogCommentPaginationParams } from './type';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { newBlogPostCommentErrorHandler } from './error';

export const useBlogPostCommentsPaginationQuery = (
  params: BlogCommentPaginationParams
) => {
  const response = useInfiniteQuery({
    queryKey: ['blog-post-comments', params.id],
    queryFn: ({ pageParam = 1 }) =>
      BlogCommentsEndpoint.getBlogPostCommentsPagination({
        page: pageParam,
        ...params,
      }),
    initialPageParam: 1,
    getNextPageParam: allPages => {
      return allPages.currentPage < allPages.lastPage
        ? allPages.currentPage + 1
        : undefined;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!params.id,
    placeholderData: keepPreviousData,
  });

  return response;
};

//댓글 작성 mutation
export const useNewBlogPostCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogCommentsEndpoint.postBlogPostComments,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blog-post-comments'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(newBlogPostCommentErrorHandler(error));
    },
  });
};
