import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.primary};
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
    border: 1px solid ${({ theme }) => theme.text.primary};
  }
  //사이트 이름
  & > :nth-child(2) {
    margin: 16px;
    font-size: 28px;
    font-weight: bold;
    align-content: center;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 24px;
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 24px;
  & > button {
    background-color: inherit;
  }
  //공개글 보러가기 버튼
  & > button:nth-child(1) {
    width: 180px;
    height: 100%;
    margin: 0px 8px;
    border-radius: 16px;
    font-size: 24px;
    border: none;
    color: ${({ theme }) => theme.text.secondary};
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.primary.base};
    margin-right: 25px;
  }
  //설정 버튼
  & > button:nth-child(2) {
    border: none;
    border-radius: 50%;
    padding: 12px;
    margin: 0px 12px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.quaternary.hover};
    }
  }
`;
