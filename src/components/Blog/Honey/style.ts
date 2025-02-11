import styled from 'styled-components';

export const HoneyWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const HoneyContainer = styled.div`
  margin: 20px 20%;
  width: 100%;
`;

export const LeftSideFloatingNavWrapper = styled.div`
  position: fixed;
  left: 7rem;
  top: 12rem;
  & > :nth-child(1) {
    width: 4rem;
    background: ${({ theme }) => theme.bg.secondary};
    border: 1px solid ${({ theme }) => theme.border.primary};
    border-radius: 2rem;
    padding: 0.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const HoneyHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  & > :nth-child(n) {
    background-color: ${({ theme }) => theme.bg.secondary};
    padding: 4px 12px;
    border-radius: 25px;
  }
`;

export const HoneyTitleH1 = styled.h1`
  font-size: 3rem;
  margin-top: 12px;
`;

export const DateAndLocationWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
`;

export const CoupleProfileWrapper = styled.div`
  display: flex;
  margin: 24px 0;
  gap: 16px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: bisque;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BlockNoteWrapper = styled.div`
  .bn-editor {
    padding-inline: 0px;
  }
`;

export const BlogCommentsWrapper = styled.div`
  margin: 15% 20%;
`;

export const BlogCommentsHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: start;
  margin-bottom: 24px;
`;

export const BlogCommentsContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BlogComment = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  //이름, 날짜, 댓글
  & > :nth-child(2) {
    & > :nth-child(1) {
      display: flex;
      gap: 8px;
    }
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const NewCommentWrapper = styled.form`
  width: 100%;
  margin-top: 48px;
  display: flex;
  gap: 10px;
`;

export const CommentInput = styled.input`
  border: none;
  outline: none;
  padding-left: 12px;
  font-size: 1rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.bg.tertiary};
  width: 100%;
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
