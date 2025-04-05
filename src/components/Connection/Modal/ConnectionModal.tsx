import Modal from '@/components/Modal';
import { ConnectionModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useEffect, useRef, useState } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { EachUserInfo } from '@/apis/connection/type';
import UserInfo from './UserInfo';
import { useTheme } from 'styled-components';
import { changeInfo } from '@/utils';
import { SearchInputType } from './type';
import useDebounce from '@/hook/useDebounce';

export default function ConnectionModal({
  isOpen,
  setIsOpen,
}: ConnectionModalProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<SearchInputType>({
    email: '',
    nickname: '',
    isEmail: false,
  });
  const searchList = ConnectionQueries.SearchQuery(
    useDebounce(searchValue, 1000)
  );
  const theme = useTheme();

  const searchListFlatten = searchList.data?.pages.flatMap(
    page => page.contents
  );

  const changeSearchValue = changeInfo.text({ setState: setSearchValue });
  const toggleSearchValue = changeInfo.toggle({
    setState: setSearchValue,
    key: 'isEmail',
  });

  const submitSearch: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    searchList.refetch();
  };

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Modal isShow={isOpen} setIsShow={setIsOpen}>
      <S.SearchModalWrapper onSubmit={submitSearch}>
        <S.ModalHeader>
          <Svg.SearchIcon color={theme.button.primary.base} />
          <h2>사용자 검색</h2>
        </S.ModalHeader>
        <S.InputWrapper>
          {!searchValue.isEmail ? (
            <S.SearchInput
              id="email"
              type="text"
              ref={searchRef}
              value={searchValue.email}
              onChange={changeSearchValue}
              placeholder="이메일로 검색하기"
            />
          ) : (
            <S.SearchInput
              id="nickname"
              type="text"
              ref={searchRef}
              value={searchValue.nickname}
              onChange={changeSearchValue}
              placeholder="이름으로 검색하기"
            />
          )}
          <S.SearchButton type="submit">
            <Svg.SearchIcon color={theme.button.primary.base} />
          </S.SearchButton>
        </S.InputWrapper>
        <S.SearchTypeToggleWrapper>
          <input type="checkbox" onClick={toggleSearchValue} />
          <label htmlFor="value">이름으로 검색하기</label>
        </S.SearchTypeToggleWrapper>
        <S.ListContainer>
          {searchListFlatten?.map((userInfo: EachUserInfo) => {
            return <UserInfo userInfo={userInfo} />;
          })}
        </S.ListContainer>
      </S.SearchModalWrapper>
    </Modal>
  );
}
