import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 24px;
  position: relative;
`;

export const CoupleInfoWrapper = styled.div`
  position: absolute;
  width: 80%;
  padding: 21px;
  border-radius: 16px;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 36px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoupleShortIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
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
