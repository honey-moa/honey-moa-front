import styled, { keyframes } from 'styled-components';

export const HoneyWrapper = styled.div`
  margin: 20px 20%;
  width: 100%;
`;

export const HoneyContentsDivLeftAndRight = styled.div`
  display: flex;
  //왼쪽
  & > :nth-child(1) {
    position: fixed;
  }
  //가운대
  & > :nth-child(2) {
    flex: 3;
  }
  //오른쪽
  & > :nth-child(3) {
    flex: 2;
  }
`;

export const LeftSideFloatingNavWrapper = styled.div`
  left: 10%;
  top: 25%;
  & > button {
    top: 10px;
    background: ${({ theme }) => theme.bg.secondary};
    border: 1px solid ${({ theme }) => theme.border.primary};
    border-radius: 2rem;
    padding: 0.5rem;
    gap: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
  }
`;

const shareBoxAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const ShareBoxButton = styled.button<{ $index: number }>`
  animation: ${shareBoxAnimation} 0.3s ease-in-out;
  animation-delay: ${({ $index }) => $index * 0.1}s;
  animation-fill-mode: both;
  position: absolute;
  top: ${({ $index }) => $index * 50}px;
  background: ${({ theme }) => theme.button.primary.base};
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  gap: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
`;

export const HoneyHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  flex-wrap: wrap;
  & > :nth-child(n) {
    color: ${({ theme }) => theme.text.secondary};
    background-color: ${({ theme }) => theme.button.primary.base};
    padding: 4px 12px;
    border-radius: 25px;
  }
`;

export const HoneyTitleH1 = styled.h1`
  font-size: 3rem;
  margin-top: 12px;
  color: ${({ theme }) => theme.text.primary};
`;

export const DateAndLocationWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  color: ${({ theme }) => theme.text.primary};
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CoupleProfileWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 16px;
  & > :nth-child(1) {
    width: 80px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: bisque;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const BlockNoteWrapper = styled.div`
  .bn-editor {
    padding-inline: 0px;
  }
`;
