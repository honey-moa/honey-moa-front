import styled, { css, keyframes } from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20%;
`;

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 46px;
`;

export const PostHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 12px;
`;

export const PostHeader = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > :nth-child(2) {
    display: flex;
    gap: 12px;
  }
`;

interface ButtonProps {
  $color?: string;
  $bgColor?: string;
  $hoverColor?: string;
}

export const ActionButton = styled.button<ButtonProps>`
  color: ${({ $color }) => $color};
  background-color: ${({ $bgColor }) => $bgColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > textarea {
    width: 100%;
    font-size: 2.75rem;
    height: 66px;
    line-height: 1.5;
    padding: 0px;
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.text.primary};
    resize: none;
    overflow: hidden;
    font-weight: bold;
  }
  & > label {
    border: 2px solid ${({ theme }) => theme.button.primary.base};
    width: 100px;
  }
`;

const smoothAppear = keyframes`
    from {
        opacity: 0;
        transform: scale(0.3);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const TagsWrapper = styled.div`
  margin: 12px 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  & > input {
    font-size: 1rem;
    width: auto;
    padding: 0px;
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.text.primary};
    font-weight: bold;
  }
  span {
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: default;
    animation: ${smoothAppear} 0.2s ease-in-out;
  }
`;

export const DateAndLocationWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 24px;
`;

export const DateInput = styled.input`
  border: none;
  font-size: 1rem;
  background-color: inherit;
  outline: none;
  color: ${({ theme }) => theme.text.primary};
`;

export const LocationInput = styled.input`
  border: none;
  font-size: 1rem;
  background-color: inherit;
  outline: none;
  color: ${({ theme }) => theme.text.primary};
`;

export const PostContents = styled.div`
  .bn-editor {
    height: 100%;
    padding-inline: 0px;
    padding-bottom: 65%;
  }
`;

export const CreateBlogPostModalWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg.tertiary};
  gap: 25px;
  label {
    font-size: 0.8rem;
    font-weight: bold;
    margin: 10px 0px;
  }
  & > :nth-child(1) {
    flex: 1;
  }
  & > :nth-child(2) {
    flex: 1;
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    padding: 8px 5px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.primary};
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const ShortDescriptionTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 1rem;
  padding: 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.button.primary.base};
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  resize: none;
`;

const fillColorButtonStyled = css`
  background-color: ${({ theme }) => theme.button.primary.base};
  color: ${({ theme }) => theme.text.secondary};
`;

const emptyColorButtonStyled = css`
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
`;

export const PublicSelectedBoxWrapper = styled.div<{
  $isPublic?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 16px;
  & > button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
  }
  ${({ $isPublic }) => {
    if ($isPublic) {
      return css`
        & > button:nth-child(1) {
          ${fillColorButtonStyled}
        }
        & > button:nth-child(2) {
          ${emptyColorButtonStyled}
        }
      `;
    } else {
      return css`
        & > button:nth-child(1) {
          ${emptyColorButtonStyled}
        }
        & > button:nth-child(2) {
          ${fillColorButtonStyled}
        }
      `;
    }
  }}
`;
export const CreateBlogPostSubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  position: relative;
  height: 100%;
  & > button {
    position: absolute;
    right: 0;
    bottom: 25%;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
  gap: 12px;
`;

export const ToastButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text.primary};
  & > button {
    padding: 8px 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.border.primary};
    background-color: ${({ theme }) => theme.button.tertiary.base};
    &:hover {
      background-color: ${({ theme }) => theme.button.tertiary.hover};
    }
  }
`;
