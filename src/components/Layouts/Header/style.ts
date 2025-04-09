import styled, { css, keyframes } from 'styled-components';

interface HeaderProps {
  $visible?: boolean;
}

const headerAnimation = keyframes`
  from {
    top: -100px;
  }
  to {
    top: 0;
  }
`;

const headerAnimationReverse = keyframes`
  from {
    top: 0;
  }
  to {
    top: -100px;
  }
`;

export const BlogHeaderWrapper = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.bg.primary};
  position: fixed;
  z-index: 77;
  ${({ $visible }) =>
    $visible
      ? css`
          top: 0;
          animation: ${headerAnimation} 0.5s forwards;
        `
      : css`
          top: -100px;
          animation: ${headerAnimationReverse} 0.5s forwards;
        `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  //사이트 로고
  & > :nth-child(1) {
    margin: 16px;
    align-content: center;
    text-align: center;
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

export const BlogNameSpaceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
  & > h1 {
    font-size: 28px;
    font-weight: bold;
    margin-left: 8px;
  }
`;

export const UnConnectedTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  //커플 연결하러 가기
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
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
  //공개글 보러가기 버튼
  & > :nth-child(1) {
    border-radius: 16px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: ${({ theme }) => theme.text.secondary};
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.primary.base};
    margin-right: 25px;
    button {
      font-size: 1.2rem;
    }
  }
  //설정 버튼
  & > :nth-child(2) {
    border: none;
    border-radius: 50%;
    padding: 12px;
    margin: 0px 12px;
    &:hover {
      background-color: ${({ theme }) => theme.button.tertiary.hover};
    }
  }
`;

export const SettingHeaderContents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 24px;
`;

export const PrevIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.button.tertiary.hover};
  }
`;
