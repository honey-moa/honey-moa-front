import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 24px;
  position: relative;
`;

export const CoupleInfoWrapper = styled.div`
  position: absolute;
  width: 50%;
  background-color: ${({ theme }) => theme.button.tertiary.base};
  opacity: 0.8;
  padding: 21px;
  border-radius: 16px;
  left: 0;
  right: 0;
  bottom: 36px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

export const CoupleShortIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  //커플이름
  h4 {
    text-align: center;
    color: ${({ theme }) => theme.text_01};
  }
  //커플소개글
  p {
    text-align: center;
    font-size: 16px;
    margin: 12px 0px;
  }
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
