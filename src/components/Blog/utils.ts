import { useFilterPageStore } from '@/store/paginationStore/useFilterPageStore';

export const onFilterHandler: React.ChangeEventHandler<
  HTMLSelectElement
> = e => {
  const value = e.target.value;
  useFilterPageStore.getState().setFilter(value as 'all' | 'public');
};

export const onChangeYearHandler: React.ChangeEventHandler<
  HTMLInputElement
> = e => {
  const newDate = new Date(e.target.value);
  useFilterPageStore.getState().setYear(newDate);
};

export const onClickYearPrevAndNextHandler = (location: 'prev' | 'next') => {
  const curDate = useFilterPageStore.getState();
  const date = new Date(`${curDate.year}-${curDate.month}-01`);
  if (location === 'prev') {
    date.setFullYear(date.getFullYear() - 1);
  } else {
    date.setFullYear(date.getFullYear() + 1);
  }
  useFilterPageStore.getState().setPrevAndNextHandler(date);
};
