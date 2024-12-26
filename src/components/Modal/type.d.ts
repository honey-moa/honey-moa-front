export interface ModalProps {
  children: React.ReactNode;
  modalType: 'box' | 'total';
  isOpen: boolean;
  shouldCloseToClickOutside: boolean;
  focusTrap: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export interface BoxProps {
  children: React.ReactNode;
  handleClose: (ev: React.MouseEvent) => void;
}

export interface TotalProps {
  children: React.ReactNode;
  handleClose: (ev: React.MouseEvent) => void;
}
