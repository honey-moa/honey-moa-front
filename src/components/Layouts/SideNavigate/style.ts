import styled, { css } from 'styled-components';

export const NavWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: 50px 12px 0px 12px;
`;

export const NavItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 0;
`;

const itemButtonStyle = css`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: inherit;
`;

export const ItemButton = styled.button`
  ${itemButtonStyle}
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.button.tertiary.hover};
  }
`;

export const ItemButtonDisabled = styled.button`
  cursor: not-allowed;
  ${itemButtonStyle}
`;
