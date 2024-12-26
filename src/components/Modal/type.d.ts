export interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  shouldCloseToClickOutside?: boolean;
  focusTrap?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}
