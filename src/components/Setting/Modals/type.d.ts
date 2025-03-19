export interface CurrentProfileInfoType {
  editName: string;
  editImage: File;
  blobImage: string;
}

type ProfileInfo = {
  name: string;
  image: File;
  blobImage: string;
};

export interface CoupleProfileInfoType {
  name: string | undefined;
  description: string | undefined;
  bgImage: File | null;
  blobImage: string | undefined;
  startDate: string | undefined;
}

export type EditProfileInputOnFocusType = React.RefObject<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface EditProfileImageOverlayComponentProps {
  children: React.ReactNode;
  htmlForId: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
