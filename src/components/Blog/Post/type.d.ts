import { BlogHoneyType } from '@/apis/blog/type';

export type HoneyContentType = BlogHoneyType;

export type BlogCommentType = {
  content: string;
};

export type HoneyLeftSideNavProps = Partial<
  Pick<HoneyContentType, 'id' | 'blogId' | 'userId'>
>;
