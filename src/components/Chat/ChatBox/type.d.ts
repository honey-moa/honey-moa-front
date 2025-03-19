import { BelongToMeChatRoomReturnType } from '@/apis/chat/type';

export interface ChatModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  belongToChatRoomData: BelongToMeChatRoomReturnType | undefined;
}
