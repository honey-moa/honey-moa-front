import styled from 'styled-components';

export const BeforeChattingStartBox = styled.div`
  position: fixed;
  right: 5%;
  bottom: 14%;
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg.primary};
  border: 2px solid ${({ theme }) => theme.button.primary.base};
  display: flex;
  align-items: center;
  justify-content: center;
  & > button {
    border: 1px solid ${({ theme }) => theme.button.primary.base};
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.primary};
    padding: 10px;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const ChatBox = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 999;
  height: 400px;
  width: 300px;
  border: 2px solid ${({ theme }) => theme.button.primary.base};
`;

export const ChatHeader = styled.div`
  background-color: ${({ theme }) => theme.bg.tertiary};
  width: 100%;
  height: 11%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ChatInfo = styled.div`
  display: flex;
  //online 표시
  /* & > span {
    margin-left: 5px;
    background-color: #2ecc71;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  } */
`;

export const ChatControl = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatBody = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  width: 100%;
  height: 80%;
  overflow-y: auto;
`;

export const ChatOperate = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  width: 100%;
  height: 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormAttachBox = styled.div`
  display: flex;
`;

export const ChatForm = styled.form`
  display: flex;
  margin: 3px;
`;

export const ChatInput = styled.input`
  border: 0px;
`;

export const IconWrapper = styled.div`
  margin: 3px;
`;

export const SendIconButton = styled.button`
  margin: 3px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.button.primary.base};
  background-color: ${({ theme }) => theme.button.primary.base};
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 88;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ChatMessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ChatMessageOwnerName = styled.span`
  margin: 0px 8px;
  font-size: 1rem;
`;

export const ChatContentsWrapper = styled.div<{ $isOwner?: boolean }>`
  display: flex;
  margin: 5px 8px;
  justify-content: ${({ $isOwner }) => ($isOwner ? 'flex-end' : 'flex-start')};
  & > div {
    max-width: 75%;
    background-color: ${({ $isOwner, theme }) =>
      $isOwner ? theme.button.primary.base : theme.bg.secondary};
    padding: 10px;
    border-radius: 16px;
    word-break: break-word;
    font-size: 1rem;
    color: ${({ theme }) => theme.text.primary};
  }
  & > span {
    display: flex;
    align-items: end;
    ${({ $isOwner }) => {
      if ($isOwner) return 'margin-right: 10px;';
      return 'margin-left: 10px;';
    }}
    font-size: 0.7rem;
    color: ${({ theme }) => theme.text.tertiary};
  }
`;

export const ObserverBox = styled.div`
  width: 100%;
`;
