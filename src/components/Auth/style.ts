import styled, { css } from 'styled-components';

const buttonBase = css`
  width: 180px;
  height: 100%;
  margin: 0px 8px;
  border-radius: 16px;
  font-size: 24px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  background-color: inherit;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  ${buttonBase};
  color: ${({ theme }) => theme.text.primary};
  &:hover {
    background-color: ${({ theme }) => theme.button.tertiary.hover};
  }
`;

export const RegisterButton = styled.button`
  ${buttonBase};
  color: ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.button.primary.base};
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const ModalWrapper = styled.div`
  width: 350px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 18px;
    margin-left: 16px;
    font-weight: 700;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContentInputContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  label {
    font-size: 12px;
    color: ${({ theme }) => theme.text.primary};
  }
  input {
    margin-top: 5px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.border.primary};
    border-radius: 5px;
    outline: none;
    padding: 8px 0px 8px 5px;
  }
`;

export const LoginBottom = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > :nth-child(1) {
    display: flex;
    gap: 10px;
    font-size: 12px;
  }
`;

export const LinkedInButton = styled.button`
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.button.primary.base};
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const ModalBottom = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  & > :nth-child(1) {
    font-size: 12px;
    color: ${({ theme }) => theme.text.tertiary};
  }
`;
