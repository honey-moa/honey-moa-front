import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { BlogEndpoint } from '.';
import { toast } from 'react-toastify';
import {
  createBlogErrorhandler,
  createNewBlogPostErrorHandler,
  getBlogHoneyErrorHandler,
  getSingleBlogErrorHandler,
  PaginationErrorHandler,
} from './error';
import { AxiosError } from 'axios';
import {
  BlogHoneyType,
  PaginationBaseType,
  PrivateBlogPaginationType,
} from './type';
import { ErrorResponse } from '../type';
import { useNavigate } from 'react-router-dom';

//블로그 생성 mutation
export const CreateBlogMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.postCreateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['create-blog'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createBlogErrorhandler(error));
    },
  });
};

//블로그 단일 조회 query
export const GetSingleBlogQuery = (id?: string) => {
  const { data, isError, error } = useQuery({
    queryKey: ['single-blog', id],
    queryFn: () => BlogEndpoint.getSingleBlog({ id }),
    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
  });
  if (isError) {
    toast.error(getSingleBlogErrorHandler(error as AxiosError));
    return null;
  }
  return data;
};

//블로그 프로필 수정 mutation
export const EditCoupleProfileMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.patchBlogCoupleInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['edit-couple-profile'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createNewBlogPostErrorHandler(error));
    },
  });
};

//블로그 게시글 생성 mutation
export const CreateNewBlogPostMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.CreateNewBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['create-blog-post'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createNewBlogPostErrorHandler(error));
    },
  });
};

//블로그 게시글 수정 mutation
export const UpdateBlogPostMutate = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.updateBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['single-blog', id],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createNewBlogPostErrorHandler(error));
    },
  });
};

//블로그 게시글 삭제 mutation
export const DeleteBlogPostMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['delete-blog-post'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createNewBlogPostErrorHandler(error));
    },
  });
};

//블로그 꿀(unit) 조회 query
export const GetBlogHoneyQuery = ({ id }: Pick<BlogHoneyType, 'id'>) => {
  const navigate = useNavigate();
  const { data, isError, error } = useQuery({
    queryKey: ['blog-honey', id],
    queryFn: () => BlogEndpoint.getBlogHoney({ id }),
    retry: false,
    refetchOnWindowFocus: false,
  });
  if (isError) {
    const err = error as AxiosError;
    toast.error(getBlogHoneyErrorHandler(err), { toastId: 'blog-honey-1' });
    const resError = err.response?.data as ErrorResponse;
    if (
      resError?.code === 'RESOURCE_NOT_FOUND' ||
      resError?.code === 'INVALID_REQUEST_PARAMETER'
    ) {
      navigate(-1);
    }
    return;
  }
  return data;
};

export const GetPrivateBlogPaginationQuery = (
  params: PrivateBlogPaginationType
) => {
  const response = useInfiniteQuery({
    queryKey: [
      'private-blog-pagination',
      params.datePeriod,
      params.showPrivatePosts,
    ],
    queryFn: ({ pageParam = 1 }) =>
      BlogEndpoint.getPrivateBlogListPagination({
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
  if (response.isError) {
    toast.error(PaginationErrorHandler(response.error as AxiosError));
    return;
  }
  return response;
};

export const GetPublicBlogPaginationQuery = (
  params: Omit<PaginationBaseType, 'id'>
) => {
  const response = useInfiniteQuery({
    queryKey: ['public-blog-pagination', params.title],
    queryFn: ({ pageParam = 1 }) =>
      BlogEndpoint.getPublicBlogListPagination({
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
    placeholderData: keepPreviousData,
  });
  if (response.isError) {
    toast.error(PaginationErrorHandler(response.error as AxiosError));
    return;
  }
  return response;
};
