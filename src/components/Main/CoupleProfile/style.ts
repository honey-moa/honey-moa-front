import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  height: 300px;
  padding: 24px;
  position: relative;
`;

export const ProfileBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoupleInfoWrapper = styled.div`
  position: absolute;
  width: 60%;
  background-color: ${({ theme }) => theme.bg_02};
  border-radius: 16px;
  left: 0;
  top: 36px;
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
  gap: 16px;
  //각 이미지
  & > :nth-child(n) {
    width: 64px;
    height: 64px;
    border: 1px solid ${({ theme }) => theme.border_02};
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const CoupleShortIntroduction = styled.div`
  //커플이름
  h2 {
    font-size: 24px;
    margin: 12px 0px;
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
