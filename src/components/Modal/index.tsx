import React, { useEffect } from 'react';
import { ModalProps } from './type';
import FocusTrapReact from 'focus-trap-react';
import { createPortal } from 'react-dom';
import * as S from './style';

export default function Modal<T = boolean>({
  children,
  isShow = false,
  setIsShow,
  shouldCloseToClickOutside = true,
  focusTrap = false,
  blur = false,
  ...rest
}: ModalProps<T>) {
  const FocusTrap = focusTrap ? FocusTrapReact : React.Fragment;

  const handleClose = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (
      !shouldCloseToClickOutside ||
      !target.classList.contains('modal-dimmed')
    )
      return;

    setIsShow?.(false as T);
    rest.onClose?.();
  };

  useEffect(() => {
    if (isShow) {
      rest.onOpen?.();
    }
  }, [isShow]);

  if (!isShow) return null;

  return (
    <>
      {createPortal(
        <FocusTrap>
          <S.ModalWrapper
            $blur={blur}
            onClick={handleClose}
            className="modal-dimmed"
          >
            {children}
          </S.ModalWrapper>
        </FocusTrap>,
        document.body
      )}
    </>
  );
}
