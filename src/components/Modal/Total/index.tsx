import { TotalProps } from '../type';
import * as S from './style';

export default function Total({ children, handleClose }: TotalProps) {
  return (
    <S.ModalWrapper onClick={handleClose} className="modal-dimmed">
      {children}
    </S.ModalWrapper>
  );
}
