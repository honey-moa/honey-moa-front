import { EachUserInfo } from '@/apis/connection/type';
import { ConnectionListContent } from '@/apis/connection/type';

export interface UserInfoProps {
  userInfo: EachUserInfo;
}

export interface ConnectionInfoProps {
  info: ConnectionListContent;
  direction: 'request' | 'requested';
}

export interface RequestMangerComponentProps {
  requestList: ConnectionListContent[] | undefined;
}

export interface SearchInputType {
  value: string;
  isEmail: boolean;
}
