import React, { useEffect, useState } from 'react';
import { ModalProps } from './type';
import FocusTrapReact from 'focus-trap-react';
import { createPortal } from 'react-dom';
import * as S from './style';

export default function Modal({
  children,
  isOpen = false,
  shouldCloseToClickOutside = true,
  focusTrap = false,
  ...rest
}: ModalProps) {
  const [show, setShow] = useState<boolean>(isOpen);

  const FocusTrap = focusTrap ? FocusTrapReact : React.Fragment;

  const handleClose = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (
      !shouldCloseToClickOutside ||
      !target.classList.contains('modal-dimmed')
    )
      return;

    setShow(false);
    rest.onClose?.();
  };

  useEffect(() => {
    setShow(prev => !prev);
  }, [isOpen]);

  useEffect(() => {
    if (show) {
      rest.onOpen?.();
    }
  }, [show]);

  if (!show) return;

  return (
    <>
      {createPortal(
        <FocusTrap>
          <S.ModalWrapper onClick={handleClose} className="modal-dimmed">
            {children}
          </S.ModalWrapper>
        </FocusTrap>,
        document.body
      )}
    </>
  );
}
