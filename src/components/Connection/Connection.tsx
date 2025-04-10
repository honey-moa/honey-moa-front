import { useState } from 'react';
import * as S from './Modal/style';
import { changeInfo } from '@/utils';
import { ConnectionStateType } from './type';
import { ManageConnectionModal, SearchConnectionModal } from './Modal';
import Modal from '../Modal';

export default function Connection() {
  const [isConnectionModal, setIsConnectionModal] =
    useState<ConnectionStateType>({
      search: false,
      manage: false,
    });

  const onToggleSearchModal = changeInfo.toggle<ConnectionStateType>({
    setState: setIsConnectionModal,
    key: 'search',
  });

  const onToggleManageModal = changeInfo.toggle<ConnectionStateType>({
    setState: setIsConnectionModal,
    key: 'manage',
  });

  return (
    <>
      <S.CoupleConnectionButtonModalWrapper>
        <S.ConnectedCoupleButton onClick={onToggleSearchModal}>
          커플 연결하기
        </S.ConnectedCoupleButton>
        <S.ConnectedCoupleButton onClick={onToggleManageModal}>
          내 요청 관리
        </S.ConnectedCoupleButton>
      </S.CoupleConnectionButtonModalWrapper>
      <Modal isShow={isConnectionModal.search} setIsShow={setIsConnectionModal}>
        <SearchConnectionModal />
      </Modal>
      <Modal isShow={isConnectionModal.manage} setIsShow={setIsConnectionModal}>
        <ManageConnectionModal />
      </Modal>
    </>
  );
}
