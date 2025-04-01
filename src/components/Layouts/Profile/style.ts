import styled from 'styled-components';

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

export const EachImageContainer = styled.div`
  display: flex;
  position: relative;
  img {
    border: 2px solid ${({ theme }) => theme.button.primary.base};
  }
`;
