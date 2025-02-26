import Modal from '@/components/Modal';
import { ConnectionModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useRef, useState } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { EachUserInfo } from '@/apis/connection/type';
import { SearchErrorHandler } from '@/apis/connection/error';
import { toast } from 'react-toastify';
import UserInfo from './UserInfo';
import { useTheme } from 'styled-components';

export default function ConnectionModal({
  isOpen,
  setIsOpen,
}: ConnectionModalProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const mutationSearch = ConnectionQueries.SearchQuery();
  const theme = useTheme();
  const [userList, setUserList] = useState<EachUserInfo[]>([]);

  const submitSearch: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (!emailRef.current) return;
    mutationSearch.mutate(emailRef.current.value, {
      onSuccess: users => {
        setUserList(users.contents);
      },
      onError: error => {
        toast.error(SearchErrorHandler(error));
      },
    });
  };

  return (
    <Modal isShow={isOpen} setIsShow={setIsOpen}>
      <S.SearchModalWrapper onSubmit={submitSearch}>
        <S.ModalHeader>
          <Svg.SearchIcon color={theme.button.primary.base} />
          <h2>사용자 검색</h2>
        </S.ModalHeader>
        <S.InputWrapper>
          <S.SearchInput ref={emailRef} placeholder="이름으로 검색하기" />
          <S.SearchButton type="submit">
            <Svg.SearchIcon color={theme.button.primary.base} />
          </S.SearchButton>
        </S.InputWrapper>
        <S.ListContainer>
          {userList.length ? (
            userList.map((userInfo: EachUserInfo) => {
              return <UserInfo userInfo={userInfo} />;
            })
          ) : (
            <div>이메일로 유저를 검색해보세요</div>
          )}
        </S.ListContainer>
      </S.SearchModalWrapper>
    </Modal>
  );
}
