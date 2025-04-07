import styled from 'styled-components';

export const ChangePasswordWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChangePasswordContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KeyIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.button.primary.base};
  > svg {
    stroke: ${({ theme }) => theme.text.quaternary};
  }
`;

export const NotificationChangePasswordValidationP = styled.p`
  font-size: 16px;
  width: 45%;
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.accent.red};
`;

export const ChangePasswordForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const ChangePasswordInputBox = styled.div`
  width: 100%;
  margin-top: 26px;
  label {
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 0 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.text.quaternary};
    font-size: 16px;
    outline: none;
  }
`;

export const ChangePasswordSubmitButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;
