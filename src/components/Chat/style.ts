import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.button.primary.base};
  background-color: ${({ theme }) => theme.button.primary.base};
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 88;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;
