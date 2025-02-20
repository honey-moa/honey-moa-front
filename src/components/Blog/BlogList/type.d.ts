import { PartialBlock } from '@blocknote/core';

export interface PaginationContents {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  blogId: string;
  title: string;
  contents: PartialBlock[];
  date: string;
  location: string;
  isPublic: boolean;
  tags?: TagsType[];
  blog?: BlogInfoType;
}
