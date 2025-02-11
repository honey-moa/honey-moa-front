import { Svg } from '@/components/Svg';
import * as S from './style';
import Image from '@/components/Image';
import { ChatQueries } from '@/apis/chat';
import { useEffect } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { useChatStore } from '@/store/chatStore/useChatStore';

export default function ChatPage() {
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });

  const { setChatId } = useChatStore();

  const chatInfo = ChatQueries.GetChatRoomQuery();

  function makeChatRoom() {
    if (chatInfo?.id) return;
    if (!connectionInfo?.contents) return;
    const roomId = ChatQueries.ChatRoomQuery()?.id;

    return roomId;
  }

  useEffect(() => {
    if (!chatInfo?.id) {
      //@ts-ignore 추후수정
      setChatId(makeChatRoom());
    } else {
      setChatId(chatInfo.id);
    }
  }, []);
  return (
    <S.Wrap>
      <S.LeftContainer>
        <S.PrevBox>
          <Svg.PrevIcon />
          <h3>우리의 대화</h3>
        </S.PrevBox>
        <S.PartnerBox>
          <Image src={''} alt="상대프사" />
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
