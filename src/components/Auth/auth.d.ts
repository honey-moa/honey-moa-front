export type modalLocation = 'login' | 'register' | 'findPassword';

export interface AuthModalProps {
  isOpen: boolean;
  onClose: (location: modalLocation) => void;
}
