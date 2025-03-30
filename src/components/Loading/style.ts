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
  border: 3px solid ${({ theme }) => theme.button.primary.base};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 0 auto;
  animation: ${rotation} 1s linear infinite;
`;

interface SkeletonUIStyleProps {
  $width: string;
  $height: string;
}

const skeletonAnimation = keyframes`
    0% {
        background-color: #e0e0e0;
    }
    50% {
        background-color: #c0c0c0;
    }
    100% {
        background-color: #e0e0e0;
    }
`;

export const SkeletonUI = styled.div<SkeletonUIStyleProps>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;

interface SkeletonTableWrapperProps {
  $columns?: number;
  $rows?: number;
}

export const SkeletonTableWrapper = styled.div<SkeletonTableWrapperProps>`
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns ? `repeat(${$columns}, 1fr)` : 'auto'};
  grid-template-rows: ${({ $rows }) =>
    $rows ? `repeat(${$rows}, 1fr)` : 'auto'};
  gap: 16px;
  margin: 16px 0;
  padding: 16px;
`;
