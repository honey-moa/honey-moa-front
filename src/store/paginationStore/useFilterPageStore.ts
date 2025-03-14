import { date } from '@/utils';
import { create } from 'zustand';

interface State {
  year?: string;
  month?: string;
  filter?: 'all' | 'public';
}

interface Action {
  setYear: (date: Date) => void;
  setMonth: (date: string) => void;
  setPrevAndNextHandler: (date: Date) => void;
  setFilter: (filter: 'all' | 'public') => void;
}

export const useFilterPageStore = create<State & Action>(set => ({
  year: date.getNowDate.year,
  month: date.getNowDate.month,
  filter: 'all',
  setYear: (paramsDate: Date) =>
    set({
      year: paramsDate.getFullYear().toString(),
      month: date.getFormattingDate({
        date: paramsDate.getMonth() + 1,
        formatType: 'MM',
      }),
    }),
  setMonth: date => set({ month: date }),
  setPrevAndNextHandler: date =>
    set({
      year: date.getFullYear().toString(),
    }),
  setFilter: (filter: 'all' | 'public') => set({ filter }),
}));
