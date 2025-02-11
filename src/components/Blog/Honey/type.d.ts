import { PartialBlock } from '@blocknote/core';

export interface HoneyType {
  couple: {
    id: string;
    name: string;
    profileImage: string;
  };
  id: string;
  title: string;
  tags?: string[];
  date?: string;
  location?: string;
  content: PartialBlock[];
}

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
