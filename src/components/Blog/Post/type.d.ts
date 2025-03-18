import { PartialBlock } from '@blocknote/core';

export interface PostContentsType {
  title: string;
  tagNames: string[];
  date: string;
  location: string;
  contents: PartialBlock[];
  isEdit?: boolean;
  thumbnailImageUrl?: string | null;
  isPublic?: boolean;
}

export type PostContentsPropsType = React.Dispatch<
  React.SetStateAction<PostContentsType>
>;

export interface TagsProps {
  tags: string[];
  setContents: PostContentsPropsType;
}

export interface EditorProps {
  setContents: PostContentsPropsType;
  initializedContents?: object[];
}

export interface CreateBlogPostModalProps {
  title: string;
  contents: PartialBlock[];
  date: string;
  location: string;
  isPublic?: boolean;
  tagNames?: string[];
  fileUrls?: string[];
  summary?: string;
  thumbnailImageUrl?: string | null;
}

export interface CreateBlogPostState extends CreateBlogPostModalProps {
  id: string;
}

export type onTogglePublicHandlerParams = 'public' | 'private';
