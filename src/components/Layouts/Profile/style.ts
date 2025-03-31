import styled from 'styled-components';

export const EachImageContainer = styled.div`
  display: flex;
  position: relative;
  img {
    border: 2px solid ${({ theme }) => theme.button.primary.base};
  }
`;

export const SvgContainer = styled.div`
  padding: 20px;
  border: 2px dashed ${({ theme }) => theme.border.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnConnectedProfileBgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const UnConnectedInfoWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.bg.tertiary};
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
