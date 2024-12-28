import styled from 'styled-components';

export const NavWrapper = styled.div`
  width: 150px;
  height: 100dvh;
  border-right: 1px solid ${({ theme }) => theme.border_01};
  display: flex;
  justify-content: center;
  padding: 50px 12px 0px 12px;
`;

export const NavItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ItemButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover_04};
  }
`;
