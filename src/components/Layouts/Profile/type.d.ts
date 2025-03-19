export interface CoupleProfileProps {
  myId?: string;
}

export interface TogetherImageProps {
  members?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
    profileImageUrl: string;
  }[];
  width?: string;
}
