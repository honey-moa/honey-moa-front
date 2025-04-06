import Modal from '@/components/Modal';
import { ConnectionModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { Suspense, useEffect, useRef, useState } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { EachUserInfo } from '@/apis/connection/type';
import UserInfo from './UserInfo';
import { useTheme } from 'styled-components';
import { changeInfo } from '@/utils';
import { SearchInputType } from './type';
import useDebounce from '@/hook/useDebounce';
import { toast } from 'react-toastify';
import { Loading } from '@/components';

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

  const nextCursorSearchListHandler = () => {
    if (searchList.hasNextPage) {
      searchList.fetchNextPage();
    } else {
      toast.info('더 이상 검색할 수 없습니다.');
    }
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
            return (
              <Suspense
                fallback={
                  <Loading.SkeletonTable
                    width="100%"
                    height="60px"
                    rows={6}
                    columns={1}
                  />
                }
              >
                <UserInfo userInfo={userInfo} />
              </Suspense>
            );
          })}
          {searchList.hasNextPage &&
            (searchList.isFetchingNextPage ? (
              <Loading.SkeletonTable
                width="100%"
                height="60px"
                rows={3}
                columns={1}
              />
            ) : (
              <S.MoreSearchListButton
                type="button"
                onClick={nextCursorSearchListHandler}
              >
                더보기
              </S.MoreSearchListButton>
            ))}
        </S.ListContainer>
      </S.SearchModalWrapper>
    </Modal>
  );
}
