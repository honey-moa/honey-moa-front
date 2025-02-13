import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BlogEndpoint } from '.';
import { toast } from 'react-toastify';
import {
  createBlogErrorhandler,
  createNewBlogPostErrorHandler,
  getBlogHoneyErrorHandler,
  getSingleBlogErrorHandler,
} from './error';
import { AxiosError } from 'axios';
import { BlogHoneyType } from './type';
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
    queryKey: ['single-blog'],
    queryFn: () => BlogEndpoint.getSingleBlog({ id }),
    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
  });
  if (isError) {
    toast.error(getSingleBlogErrorHandler(error as AxiosError));
    return;
  }
  return data;
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

//블로그 꿀(unit) 조회 query
export const GetBlogHoneyQuery = ({ id }: Pick<BlogHoneyType, 'id'>) => {
  const navigate = useNavigate();
  const { data, isError, error } = useQuery({
    queryKey: ['blog-honey'],
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
