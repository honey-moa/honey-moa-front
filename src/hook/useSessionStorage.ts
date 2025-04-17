import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { toast } from 'react-toastify';

const STORAGE_EVENT_NAME = 'local-storage-event';

export default function useSessionStorage<T = string>(
  key: string,
  initialValue?: T
) {
  const getSnapshot = () => sessionStorage.getItem(key);

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
        const parsedValue = JSON.stringify(newValue);
        sessionStorage.setItem(key, parsedValue);
        dispatchEvent(
          new StorageEvent(STORAGE_EVENT_NAME, { key, newValue: parsedValue })
        );
      } catch (error) {
        toast.error(`스토리지에 저장하는데 문제가 발생했습니다: ${error}`);
      }
    },
    [key]
  );

  const removeStorage = useCallback(() => {
    sessionStorage.removeItem(key);
    dispatchEvent(new StorageEvent(STORAGE_EVENT_NAME, { key }));
  }, [key]);

  return {
    value: store,
    set: setStorage,
    remove: removeStorage,
  };
}
