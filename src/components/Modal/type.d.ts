export interface ModalProps<T = boolean> {
  children: React.ReactNode;
  isShow?: boolean;
  setIsShow?: React.Dispatch<React.SetStateAction<T>>;
  shouldCloseToClickOutside?: boolean;
  focusTrap?: boolean;
  blur?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export interface ModalWrapperProps {
  $blur: boolean;
}
