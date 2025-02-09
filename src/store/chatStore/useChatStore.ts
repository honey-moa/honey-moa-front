import { create } from 'zustand';
import { ChatStoreType } from './type';

export const useChatStore = create<ChatStoreType>(set => ({
  chatId: '',
  setChatId: (chatId: string) => set({ chatId }),
}));
