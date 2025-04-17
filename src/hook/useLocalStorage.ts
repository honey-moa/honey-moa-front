import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { toast } from 'react-toastify';

const STORAGE_EVENT_NAME = 'local-storage-event';

/**
 *
 * @param key 스토리지에 저장될 키 값
 *
 * @returns value: 스토리지에 저장된 값
 * @returns set: 스토리지에 값을 저장하는 함수
 * @returns remove: 스토리지에 값을 삭제하는 함수
 *
 * @example
 * //별명 지정 가능
 * //const { value: theme, set: setTheme, remove: removeTheme } = useLocalStorage('theme');
 * const { value, set, remove } = useLocalStorage('key');
 *
 * const onClick = () => {
 *    set('value');
 * }
 *
 * return (
 * <>
 *  <div>{value}</div>
 *  <button onClick={onClick}>버튼</button>
 * </>
 * )
 */
export default function useLocalStorage<T = string>(
  key: string,
  initialValue?: T
) {
  const getSnapshot = () => localStorage.getItem(key);

  const subscribe = (listener: () => void) => {
    window.addEventListener(STORAGE_EVENT_NAME, listener);
    return () => window.removeEventListener(STORAGE_EVENT_NAME, listener);
  };

  const externalStoreState = useSyncExternalStore(subscribe, getSnapshot);

  const store = useMemo(() => {
    return externalStoreState ? externalStoreState : initialValue;
  }, [externalStoreState, initialValue]);

  const setStorage = useCallback(
    (newValue: unknown) => {
      try {
        const valueToStore = JSON.stringify(newValue);
        localStorage.setItem(key, valueToStore);
        dispatchEvent(
          new StorageEvent(STORAGE_EVENT_NAME, { key, newValue: valueToStore })
        );
      } catch (error) {
        toast.error(`스토리지에 저장하는데 문제가 발생했습니다: ${error}`);
      }
    },
    [key]
  );

  const removeStorage = useCallback(() => {
    localStorage.removeItem(key);
    dispatchEvent(new StorageEvent(STORAGE_EVENT_NAME, { key }));
  }, [key]);

  return {
    value: store,
    set: setStorage,
    remove: removeStorage,
  };
}
