import * as S from './style';
import { Link } from 'react-router-dom';
import { Svg } from '@/components/Svg';
import { ChatQueries } from '@/apis/chat';
import { toast } from 'react-toastify';
import { ChatModalProps } from './type';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Profile } from '@/components/Layouts';

export default function ChatRoomModal({
  setIsOpen,
  belongToChatRoomData,
}: ChatModalProps) {
  const createChatRoom = ChatQueries.usePostCreateChatRoom();
  const myInfo = UserQueries.GetMyInfoQuery();
  const blogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const onClickStartChatting = () => {
    createChatRoom.mutate(undefined, {
      onSuccess: () => {
        toast.success('채팅방이 생성되었습니다.');
      },
    });
  };

  if (belongToChatRoomData === undefined)
    return (
      <S.BeforeChattingStartBox>
        <button onClick={onClickStartChatting}>연인과 채팅 시작하기</button>
      </S.BeforeChattingStartBox>
    );

  return (
    <S.ChatBox>
      <S.ChatHeader>
        <S.ChatInfo>
          <Profile.TogetherImage members={blogInfo?.members} width="32px" />
          <span></span>
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
        <S.ChatForm onSubmit={e => e.preventDefault()}>
          <S.ChatInput placeholder="Type a message..." />
          <S.IconWrapper>
            <Svg.SendIcon />
          </S.IconWrapper>
        </S.ChatForm>
      </S.ChatOperate>
    </S.ChatBox>
  );
}
