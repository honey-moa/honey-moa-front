import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import useLocalStorage from './useLocalStorage';
import { toast } from 'react-toastify';

const CHAT_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

export const useSocket = () => {
  const socket = useRef<Socket | null>(null); // 소켓 상태 추가
  const { value: token } = useLocalStorage('accessToken');

  useEffect(() => {
    socket.current = io(`${CHAT_SERVER_URL}/chats`, {
      path: '/socket.io',
      autoConnect: false,
      extraHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
    socket.current.connect(); // 수동 연결

    socket.current.on('connect_error', err => {
      console.error('연결 에러:', err.message);
      toast.error('채팅 서버 연결에 실패했습니다.');
    });

    socket.current.on('reconnect_failed', () => {
      console.error('재연결 실패');
      toast.error('서버 연결이 불안정합니다. 페이지를 새로고침해주세요.');
    });

    socket.current.on('reconnect_attempt', attemptNumber => {
      console.log(`재연결 시도 ${attemptNumber}`);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [socket]);

  return socket.current;
};
