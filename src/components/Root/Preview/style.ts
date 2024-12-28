import styled from 'styled-components';

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0px 20px;
`;

export const ListHeader = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 30px 0px 40px 0px;
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
`;

export const PreviewDiv = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.border_01};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 5px 15px 5px ${({ theme }) => theme.hover_03};
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 12px;
  padding: 8px;
  //커플 프로필 사진
  & > :nth-child(1) {
    width: 45px;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.border_01};
    border-radius: 50%;
    overflow: hidden;
  }
  //커플 이름
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const PreviewContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 12px;
  padding: 0px 8px;
  //이야기 사진
  & > :nth-child(1) {
    width: 100%;
    height: 200px;
    /* border: 1px solid ${({ theme }) => theme.border_01}; */
    border-radius: 16px;
    overflow: hidden;
  }
  //이야기 내용
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    font-size: 20px;
    font-weight: bold;
  }
  h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 12px;
    font-size: 20px;
    font-weight: 600;
  }
  //커플 소개
  p {
    margin-top: 12px;
    font-size: 16px;
    color: ${({ theme }) => theme.text_03};
  }
`;
