import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  border-radius: 50%;
  padding: 8px;
  background-color: ${({ theme }) => theme.bg.tertiary};
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 999;

  &:hover {
    background-color: lightgray;
  }
`;
