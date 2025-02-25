import { Svg } from '@/components/Svg';
import * as S from './style';
import Image from '@/components/Image';
import { ChatQueries } from '@/apis/chat';
import { useEffect } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { useChatStore } from '@/store/chatStore/useChatStore';
import { io } from 'socket.io-client';

export default function ChatPage() {
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });

  const { setChatId } = useChatStore();

  const chatInfo = ChatQueries.GetChatRoomQuery();

  const socket = io(`${import.meta.env.VITE_BASE_URL}`, {
    extraHeaders: {
      token: `Bearer ${window.localStorage.getItem('accessToken')}`,
    },
    // Authrization
  });

  function makeChatRoom() {
    if (chatInfo?.id) return;
    if (!connectionInfo?.contents) return;
    ChatQueries.CreateChatRoomMutate();
  }

  useEffect(() => {
    if (!chatInfo?.id) {
      makeChatRoom();
    } else setChatId(chatInfo?.id);
  }, [chatInfo]);
  return (
    <S.Wrap>
      <S.LeftContainer>
        <S.PrevBox>
          <Svg.PrevIcon />
          <h3>우리의 대화</h3>
        </S.PrevBox>
        <S.PartnerBox>
          <Image
            src="/images/introImage.jpg"
            alt="상대프사"
            width="30px"
            height="30px"
          />
          <S.PartnerName>이름</S.PartnerName>
        </S.PartnerBox>
        <div>
          <div>공유된 미디어</div>
        </div>
      </S.LeftContainer>
      <S.RightContainer>
        <div>채팅창 헤더</div>
        <div>바디</div>
        <div>
          <input />
          <Svg.SendIcon />
        </div>
      </S.RightContainer>
    </S.Wrap>
  );
}
