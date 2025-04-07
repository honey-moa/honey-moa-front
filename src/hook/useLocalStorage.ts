import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { toast } from 'react-toastify';

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
export default function useLocalStorage(
  key: string,
  initialValue?: string | null
) {
  const getSnapshot = () => localStorage.getItem(key);

  const subscribe = (listener: () => void) => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  };

  const externalStoreState = useSyncExternalStore(subscribe, getSnapshot);

  const store = useMemo(() => {
    return externalStoreState ? externalStoreState : initialValue;
  }, [externalStoreState, initialValue]);

  const setStorage = useCallback(
    (newValue: string) => {
      try {
        localStorage.setItem(key, newValue);
        dispatchEvent(new StorageEvent('storage', { key: key, newValue }));
      } catch (error) {
        toast.error(`스토리지에 저장하는데 문제가 발생했습니다: ${error}`);
      }
    },
    [key]
  );

  const removeStorage = useCallback(
    (removeValue: string) => {
      localStorage.removeItem(removeValue);
      dispatchEvent(new StorageEvent('storage', { key: removeValue }));
    },
    [key]
  );

  const clearStorage = useCallback(() => {
    localStorage.clear();
    dispatchEvent(new StorageEvent('storage', { key: key }));
  }, [key]);

  return {
    value: store,
    set: setStorage,
    remove: removeStorage,
    clear: clearStorage,
  };
}
