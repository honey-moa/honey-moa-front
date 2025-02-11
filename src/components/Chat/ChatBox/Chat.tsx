import * as S from './style';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import { Svg } from '@/components/Svg';
import { Dispatch, SetStateAction } from 'react';

interface ChatBoxProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Chat({ setIsOpen }: ChatBoxProps) {
  return (
    <S.ChatBox>
      <S.ChatHeader>
        <S.ChatInfo>
          <Image src="" alt="프로필사진" /> <h3>{'이름'}</h3>
        </S.ChatInfo>
        <S.ChatControl>
          <S.IconWrapper onClick={() => setIsOpen(false)}>
            <Link to="/chat">
              <Svg.FullIcon />
            </Link>
          </S.IconWrapper>
          <S.IconWrapper onClick={() => setIsOpen(false)}>
            <Svg.CloseIcon />
          </S.IconWrapper>
        </S.ChatControl>
      </S.ChatHeader>
      <S.ChatBody></S.ChatBody>
      <S.ChatOperate>
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
      </S.ChatOperate>
    </S.ChatBox>
  );
}
