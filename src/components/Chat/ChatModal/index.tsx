import { ChatModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { Link } from 'react-router-dom';

export default function ChatModal({ isOpen, setIsOpen }: ChatModalProps) {
  return (
    <>
      {isOpen ? (
        <S.ChatBox>
          <S.ChatHeader>
            <S.ChatInfo>
              <S.ChatProfileImg>사진</S.ChatProfileImg>
              <S.ChatName>{'이름'}</S.ChatName>
            </S.ChatInfo>
            <S.ChatControl>
              <S.IconWrapper onClick={() => setIsOpen(false)}>
                <Link to="/chat">
                  <Svg.FullIcon />
                </Link>
              </S.IconWrapper>
              <S.IconWrapper>
                <Svg.CloseIcon />
              </S.IconWrapper>
            </S.ChatControl>
          </S.ChatHeader>
          <S.ChatBody></S.ChatBody>
          <S.ChatFooter>
            <S.FormAttachBox>
              <S.IconWrapper>
                <Svg.FileIcon />
              </S.IconWrapper>
              <S.IconWrapper>
                <Svg.EmojiIcon />
              </S.IconWrapper>
            </S.FormAttachBox>
            <S.ChatForm>
              <S.ChatInput placeholder="Type a message..." />
              <S.IconWrapper>
                <Svg.SendIcon />
              </S.IconWrapper>
            </S.ChatForm>
          </S.ChatFooter>
        </S.ChatBox>
      ) : (
        <></>
      )}
    </>
  );
}
