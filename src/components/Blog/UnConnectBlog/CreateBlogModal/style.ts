import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 400px;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    margin-left: 10px;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const CreateBlogDescription = styled.p`
  font-size: 1em;
  text-align: center;
  padding: 8px 0px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.button.primary.base};
  color: ${({ theme }) => theme.text.primary};
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.button.primary.base};
  }
`;

export const CreateBlogForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 24px;
  label {
    font-size: 0.8em;
    color: ${({ theme }) => theme.text.primary};
    margin-top: 8px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.button.primary.base};
  }
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.button.primary.base};
    resize: none;
  }
  button {
    width: 100%;
    padding: 8px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.primary};
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
  }
`;
