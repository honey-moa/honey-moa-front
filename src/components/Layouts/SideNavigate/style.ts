import { breakpoints } from '@/styles/GlobalStyles';
import styled, { css } from 'styled-components';

export const NavWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: 50px 12px 0px 12px;
  ${breakpoints.small} {
    position: fixed;
    z-index: 100;
  }
`;

export const NavItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: fixed;
  top: 150px;
  ${breakpoints.small} {
    width: 100%;
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 16px;
    background-color: ${({ theme }) => theme.bg.secondary};
  }
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
