import styled, { css } from 'styled-components';

export const EachUserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  border: 1px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NickName = styled.h5``;
export const Email = styled.span`
  color: gray;
  font-size: smaller;
`;

export const ConnectButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  * {
    margin-right: 10px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  * {
    margin-right: 8px;
  }
`;

export const ControlBox = styled.div`
  width: 20%;
`;

export const ConnectionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

interface ConnectionStatusButtonProps {
  $status: 'ACCEPTED' | 'REJECTED' | 'CANCELED';
}

export const ConnectionStatusButton = styled.button<ConnectionStatusButtonProps>`
  background-color: ${({ theme, $status }) =>
    $status === 'ACCEPTED'
      ? theme.button.tertiary.base
      : $status === 'REJECTED'
      ? theme.button.secondary.base
      : theme.button.secondary.base};
  color: ${({ theme }) => theme.text.primary};
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  margin: 4px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const ConnectedCoupleButton = styled.button`
  height: 48px;
  border-radius: 25px;
  border: none;
  background-color: ${({ theme }) => theme.button.primary.base};
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  cursor: pointer;
  padding: 12px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const CoupleConnectionButtonModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const ModalWrapperStyle = css`
  width: 500px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.primary};
  display: flex;
  flex-direction: column;
`;

export const SearchModalWrapper = styled.form`
  ${ModalWrapperStyle}
`;

export const ManageModalWrapper = styled.div`
  ${ModalWrapperStyle}
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 18px;
    margin-left: 16px;
    font-weight: 700;
  }
  margin-bottom: 12px;
`;
export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border.primary};
  height: 42px;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const SearchInput = styled.input`
  border: 0px;
  width: 100%;
  outline: none;
`;

export const SearchTypeToggleWrapper = styled.div`
  display: flex;
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.button.tertiary.base};
  cursor: pointer;
  border: none;
`;

export const ConnectionFeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`;

export const ListContainer = styled.div`
  padding: 12px;
  width: 100%;
`;

export const ConnectionItemWrapper = styled.div`
  margin: 12px;
`;
