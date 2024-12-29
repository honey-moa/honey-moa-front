import styled, { css } from 'styled-components';
import { HoneyListMonthsProps } from './type';

export const HoneyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 24px;
`;

export const HoneyListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > select {
    width: 180px;
    height: 45px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.border_01};
    background-color: inherit;
    cursor: pointer;
  }
  & > div {
    display: flex;
    gap: 16px;
    & > span {
      font-size: 24px;
      color: ${({ theme }) => theme.text_01};
      cursor: pointer;
    }
  }
`;

export const HoneyListMonthsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HoneyListMonths = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;

export const HoneyMonthItem = styled.li<HoneyListMonthsProps>`
  font-size: 24px;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 25px;
  ${({ theme, isNowMonth }) => {
    return css`
      color: ${isNowMonth ? theme.text_02 : theme.text_01};
      background-color: ${isNowMonth ? theme.btn_02 : theme.btn_01};
    `;
  }};
`;

export const HoneyCardGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 36px;
  gap: 24px;
`;

export const HoneyCardContainer = styled.div`
  width: 100%;
  padding: 24px;
  max-height: 550px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border_01};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 5px 15px 5px ${({ theme }) => theme.hover_03};
  }
`;
export const HoneyCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  //커플 프로필 이미지
  & > :nth-child(1) {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  //커플 이름
  & > :nth-child(2) {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_01};
  }
`;
export const HoneyCardImageContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 16px;
  margin-top: 12px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HoneyCardTitleAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  //블로그 제목
  & > :nth-child(1) {
    font-size: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_01};
  }
  //날짜
  & > :nth-child(2) {
    font-size: 18px;
    color: ${({ theme }) => theme.text_03};
  }
`;

export const HoneyCardSummary = styled.p`
  margin-top: 12px;
  font-size: 18px;
  margin: 8px 0px;
  overflow: hidden;
  color: ${({ theme }) => theme.text_01};
`;
