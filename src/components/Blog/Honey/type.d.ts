import { BlogHoneyType } from '@/apis/blog/type';

export type HoneyContentType = BlogHoneyType;

export type BlogCommentType = {
  id: string;
  content: string;
  date: string;
  user: {
    id: string;
    name: string;
    profileImage: string;
  };
};
