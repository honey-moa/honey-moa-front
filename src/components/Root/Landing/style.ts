import styled from 'styled-components';

export const IntroWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 64px 48px;
  display: flex;
`;

export const IntroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
  height: 100%;
  //intro 제목
  & > h2 {
    font-size: 64px;
    font-weight: bold;
    line-height: 1.1;
    color: ${({ theme }) => theme.text.primary};
  }
  //intro 설명
  & > p {
    font-size: 24px;
    color: ${({ theme }) => theme.text.primary};
    margin-top: 24px;
  }
  //시작하기 버튼
  & > button {
    margin-top: 36px;
    width: 180px;
    height: 60px;
    border-radius: 16px;
    font-size: 24px;
    border: none;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const IntroRight = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;
