import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import useLocalStorage from './useLocalStorage';
import { toast } from 'react-toastify';

const CHAT_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null); // 소켓 상태 추가
  const { value: token } = useLocalStorage('accessToken');

  useEffect(() => {
    const newSocket = io(`${CHAT_SERVER_URL}/chats`, {
      path: '/socket.io',
      extraHeaders: {
        authorization: `Bearer ${token}`,
      },
    });

    setSocket(newSocket); // 상태 업데이트

    newSocket.on('connect', () => {
      console.log('연결');
    });

    newSocket.on('connect_error', err => {
      console.error('연결 에러:', err.message);
      toast.error('채팅 서버 연결에 실패했습니다.');
    });

    newSocket.on('reconnect_failed', () => {
      console.error('재연결 실패');
      toast.error('서버 연결이 불안정합니다. 페이지를 새로고침해주세요.');
    });

    newSocket.on('reconnect_attempt', attemptNumber => {
      console.log(`재연결 시도 ${attemptNumber}`);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return socket;
};
