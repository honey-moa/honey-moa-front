import { ChatModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';

export default function ChatModal({ isOpen }: ChatModalProps) {
  return (
    <>
      {isOpen ? (
        <S.ChatBox>
          <S.ChatHeader>
            <S.ChatInfo>
              <S.ChatProfileImg>사진</S.ChatProfileImg>
              <S.ChatName>이름</S.ChatName>
            </S.ChatInfo>
            <S.ChatControl>
              <S.IconWrapper>
                <Svg.FullIcon>전체화면</Svg.FullIcon>
              </S.IconWrapper>
              <S.IconWrapper>
                <Svg.CloseIcon>닫기</Svg.CloseIcon>
              </S.IconWrapper>
            </S.ChatControl>
          </S.ChatHeader>
          <S.ChatBody></S.ChatBody>
          <S.ChatFooter>
            <S.FormAttachBox>
              <S.IconWrapper>
                <Svg.FileIcon>파일</Svg.FileIcon>
              </S.IconWrapper>
              <S.IconWrapper>
                <Svg.EmojiIcon>이모지</Svg.EmojiIcon>
              </S.IconWrapper>
            </S.FormAttachBox>
            <S.ChatForm>
              <S.ChatInput placeholder="Type a message..." />
              <S.IconWrapper>
                <Svg.SendIcon>전송</Svg.SendIcon>
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
