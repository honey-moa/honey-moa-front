import { ChatBoxProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import useLocalStorage from '@/hook/useLocalStorage';
import { ConnectionQueries } from '@/apis/connection';
import Chat from './\bChat';

export default function ChatBox({ isOpen, setIsOpen }: ChatBoxProps) {
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });

  const { value: token } = useLocalStorage('accessToken');

  if (!token) return;

  return (
    <>
      {connectionInfo?.contents.length !== 0 && (
        <S.ButtonWrapper onClick={() => setIsOpen(prev => !prev)}>
          <Svg.ChatIcon size={39} />
        </S.ButtonWrapper>
      )}

      {isOpen && <Chat setIsOpen={setIsOpen} />}
    </>
  );
}
