import styled from 'styled-components';

export const BlogCommentsWrapper = styled.div`
  margin: 15% 20%;
`;

export const BlogCommentsHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: start;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text.primary};
`;

export const BlogCommentsContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const BlogComment = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  //하위 모든 버튼
  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    padding: 8px 16px;
    width: 60px;
    height: 50px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.button.primary.base};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const CommentInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  & > :nth-child(2) {
    & > :nth-child(1) {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      //닉네임
      span {
        font-weight: 700;
        font-size: 1rem;
      }
      //년월일
      p {
        font-size: 0.6rem;
        color: ${({ theme }) => theme.text.tertiary};
      }
    }
    //댓글
    & > p {
      font-size: 1rem;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    color: ${({ theme }) => theme.text.primary};
    width: 100%;
  }
`;

export const UpdateCommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NewCommentWrapper = styled.form`
  width: 100%;
  margin-top: 48px;
  display: flex;
  gap: 10px;
`;

export const CommentTextarea = styled.textarea`
  border: none;
  outline: none;
  padding: 15px 0px 15px 15px;
  border-radius: 16px;
  font-size: 1rem;
  resize: none;
  overflow-y: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.tertiary};
  color: ${({ theme }) => theme.text.primary};
`;

export const ReadOnlyCommentTextarea = styled.textarea`
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  resize: none;
  cursor: default;
  width: 100%;
  height: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
`;

export const SendButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.button.tertiary.hover};
  }
`;

export const EditCommentButtonWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
`;
