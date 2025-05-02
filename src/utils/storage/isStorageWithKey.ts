export function isStorageWithKey(key: string) {
  return window.localStorage.getItem(key) !== null;
}
