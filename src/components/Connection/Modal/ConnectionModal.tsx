import Modal from '@/components/Modal';
import { ConnectionModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { Suspense, useCallback, useState } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { EachUserInfo } from '@/apis/connection/type';
import UserInfo from './UserInfo';
import { useTheme } from 'styled-components';
import { changeInfo } from '@/utils';
import { SearchInputType } from './type';
import useDebounce from '@/hook/useDebounce';
import { toast } from 'react-toastify';
import { Loading, PopUp } from '@/components';

export default function ConnectionModal({
  isOpen,
  setIsOpen,
}: ConnectionModalProps) {
  const [searchValue, setSearchValue] = useState<SearchInputType>({
    value: '',
  });
  const searchList = ConnectionQueries.SearchQuery(
    useDebounce(searchValue, 1000)
  );
  const theme = useTheme();

  const searchListFlatten = searchList.data?.pages.flatMap(
    page => page.contents
  );

  const changeSearchValue = changeInfo.text({ setState: setSearchValue });

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

  const setSearchRef = useCallback((node: HTMLInputElement | null) => {
    if (node) {
      node.focus();
    }
  }, []);
  return (
    <Modal isShow={isOpen} setIsShow={setIsOpen}>
      <S.SearchModalWrapper onSubmit={submitSearch}>
        <S.ModalHeader>
          <Svg.SearchIcon color={theme.button.primary.base} />
          <h2>사용자 검색</h2>
          <PopUp.Tooltip
            message="이메일로 검색 시 이메일 형식에 맞게 적어주시길 바랍니다."
            direction="bottom"
          >
            <Svg.InfoIcon />
          </PopUp.Tooltip>
        </S.ModalHeader>
        <S.InputWrapper>
          <S.SearchInput
            id="value"
            type="text"
            ref={setSearchRef}
            value={searchValue.value}
            onChange={changeSearchValue}
            placeholder="이메일 혹은 이름으로 검색하기"
          />
          <S.SearchButton type="submit">
            <Svg.SearchIcon color={theme.button.primary.base} />
          </S.SearchButton>
        </S.InputWrapper>
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
                <UserInfo userInfo={userInfo} key={userInfo.id} />
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
          {searchListFlatten?.length === 0 && (
            <span>검색 결과가 없습니다.</span>
          )}
        </S.ListContainer>
      </S.SearchModalWrapper>
    </Modal>
  );
}
