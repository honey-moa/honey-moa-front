import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

export const SpinnerDiv = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid ${({ theme }) => theme.button.primary.base};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 0 auto;
  animation: ${rotation} 1s linear infinite;
`;
