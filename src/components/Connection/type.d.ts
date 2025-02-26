export interface ConnectionStateType {
  search: boolean;
  manage: boolean;
}

export type ConnectionModalType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<ConnectionStateType>>;
};

export type ConnectionModalProps = ConnectionModalType;

export type ManageModalProps = ConnectionModalType;
