import { breakpoints } from '@/styles/GlobalStyles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BlogListWrapper = styled.div`
  margin: 0px 24px;
  height: 100%;
`;

export const BlogListHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.text.primary};
  //선택 영역
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
  }
  //월 선택 영역
  & > :nth-child(2) {
    display: flex;
    justify-content: center;
  }
`;

export const BlogSelectYearButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 5px;
  gap: 12px;
  & > button {
    border: none;
    background-color: inherit;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
  & > span {
    font-size: 1.2rem;
    padding: 5px 8px;
    flex-grow: 1;
  }
  input {
    width: 80px;
  }
  input[type='date'] {
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    color: transparent;
    &::before {
      content: attr(placeholder);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.button.primary.base};
      pointer-events: none; // 가상 요소가 클릭 이벤트를 받지 않도록 설정
    }
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    position: absolute; // 이를 설정하기 위해 사전에 relative를 설정한 것이다.
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent; // 배경은 투명하게,
    color: transparent; // 글자도 투명하게! 이 두 설정을 통해 캘린더 아이콘을 사라지게 만든다.
    cursor: pointer;
  }
`;

export const BlogSelectMonthButton = styled.button<{
  $isSelectedMonth: boolean;
}>`
  border: none;
  background-color: ${({ $isSelectedMonth, theme }) =>
    $isSelectedMonth ? theme.button.primary.base : 'inherit'};
  padding: 8px 16px;
  margin: 0px 5px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.primary};
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const BlogSelectMonthSpan = styled.span`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const BlogListPaginationWrapper = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 24px;
  grid-template-columns: repeat(3, 1fr);
  ${breakpoints.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${breakpoints.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoints.small} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BlogHoneyCardWrapper = styled(Link)`
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 8px;
  padding: 8px 16px;
  min-height: 400px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.shadow.primary};
  }
`;

export const HoneyInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
  > h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const HoneyCardSummary = styled.div`
  .bn-editor {
    padding-inline: 0px;
  }
  .bn-inline-content {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text.tertiary};
  }
`;
