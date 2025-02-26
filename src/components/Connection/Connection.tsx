import { useState } from 'react';
import * as S from './Modal/style';
import { changeInfo } from '@/utils';
import { ConnectionStateType } from './type';
import { ManageConnectionModal, SearchConnectionModal } from './Modal';

export default function Connection() {
  const [isConnection, setIsConnection] = useState<ConnectionStateType>({
    search: false,
    manage: false,
  });

  const onToggleSearchModal = changeInfo.toggle<ConnectionStateType>({
    setState: setIsConnection,
    key: 'search',
  });

  const onToggleManageModal = changeInfo.toggle<ConnectionStateType>({
    setState: setIsConnection,
    key: 'manage',
  });

  return (
    <>
      <S.CoupleConnectionButtonModalWrapper>
        <S.ConnectedCoupleButton onClick={onToggleSearchModal}>
          커플 연결하기
        </S.ConnectedCoupleButton>
        <S.ConnectedCoupleButton onClick={onToggleManageModal}>
          나에게 온 요청
        </S.ConnectedCoupleButton>
      </S.CoupleConnectionButtonModalWrapper>
      <SearchConnectionModal
        isOpen={isConnection.search}
        setIsOpen={setIsConnection}
      />
      <ManageConnectionModal
        isOpen={isConnection.manage}
        setIsOpen={setIsConnection}
      />
    </>
  );
}
