import { ChatBoxProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import useLocalStorage from '@/hook/useLocalStorage';
import { ConnectionQueries } from '@/apis/connection';

export default function ChatBox({ isOpen, setIsOpen }: ChatBoxProps) {
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });

  const { value: token } = useLocalStorage('accessToken');

  console.log(connectionInfo);
  if (!token) return;

  return (
    <>
      {connectionInfo?.contents.length !== 0 && (
        <S.ButtonWrapper onClick={() => setIsOpen(prev => !prev)}>
          <Svg.ChatIcon size={39} />
        </S.ButtonWrapper>
      )}

      {isOpen && (
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
      )}
    </>
  );
}
