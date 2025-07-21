import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { toast } from 'react-toastify';
import useSessionStorage from './useSessionStorage';
import useLocalStorage from './useLocalStorage';

const CHAT_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

export const useSocket = () => {
  const socket = useRef<Socket | null>(null); // 소켓 상태 추가
  const { value: localToken } = useLocalStorage('accessToken');
  const { value: sessionToken } = useSessionStorage('accessToken');

  useEffect(() => {
    const accessToken = sessionToken
      ? JSON.parse(sessionToken)
      : localToken
      ? JSON.parse(localToken)
      : null;
    socket.current = io(`${CHAT_SERVER_URL}/chats`, {
      path: '/socket.io',
      autoConnect: false,
      extraHeaders: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    socket.current.connect(); // 수동 연결

    socket.current.on('connect_error', err => {
      console.error('연결 에러:', err.message);
      toast.error('채팅 서버 연결에 실패했습니다.');
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [socket]);

  return socket.current;
};
