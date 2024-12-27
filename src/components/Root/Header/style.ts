import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border_01};
  background-color: ${({ theme }) => theme.bg_01};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  //사이트 로고
  & > :nth-child(1) {
    border-radius: 50%;
    width: 65px;
    height: 65px;
    margin: 16px;
    align-content: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.text_01};
  }
  //사이트 이름
  & > :nth-child(2) {
    margin: 16px;
    font-size: 28px;
    font-weight: bold;
    align-content: center;
    color: ${({ theme }) => theme.text_01};
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 24px;
  & > button {
    width: 180px;
    height: 100%;
    margin: 0px 8px;
    border-radius: 16px;
    font-size: 24px;
    border: 1px solid ${({ theme }) => theme.border_01};
    background-color: inherit;
    cursor: pointer;
  }
  //로그인 버튼
  & > button:nth-child(1) {
    color: ${({ theme }) => theme.text_01};
    background-color: ${({ theme }) => theme.btn_01};
    &:hover {
      background-color: ${({ theme }) => theme.hover_01};
    }
  }
  //회원가입 버튼
  & > button:nth-child(2) {
    color: ${({ theme }) => theme.text_02};
    background-color: ${({ theme }) => theme.btn_02};
    &:hover {
      background-color: ${({ theme }) => theme.hover_02};
    }
  }
`;
