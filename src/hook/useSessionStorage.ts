import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { toast } from 'react-toastify';

export default function useSessionStorage(
  key: string,
  initialValue?: string | null
) {
  const getSnapshot = () => sessionStorage.getItem(key);

  const subscribe = (listener: () => void) => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  };

  const externalStoreState = useSyncExternalStore(subscribe, getSnapshot);

  const store = useMemo(() => {
    return externalStoreState ? externalStoreState : initialValue;
  }, [externalStoreState, initialValue]);

  const setStorage = useCallback(
    (newValue: unknown) => {
      const parsedValue = JSON.stringify(newValue);
      try {
        sessionStorage.setItem(key, parsedValue);
        dispatchEvent(
          new StorageEvent('storage', { key: key, newValue: parsedValue })
        );
      } catch (error) {
        toast.error(`스토리지에 저장하는데 문제가 발생했습니다: ${error}`);
      }
    },
    [key]
  );

  const removeStorage = useCallback(
    (removeValue: string) => {
      sessionStorage.removeItem(removeValue);
      dispatchEvent(new StorageEvent('storage', { key: removeValue }));
    },
    [key]
  );

  const clearStorage = useCallback(() => {
    sessionStorage.clear();
    dispatchEvent(new StorageEvent('storage', { key: key }));
  }, [key]);

  return {
    value: store,
    set: setStorage,
    remove: removeStorage,
    clear: clearStorage,
  };
}
