import { MMKV } from 'react-native-mmkv';

export const localDb = new MMKV();

type StorageKeys = 'loginData' | 'user' | 'loginStatus';

// save methods

export function storeData(storageKey: StorageKeys, object: any) {
  localDb.set(storageKey, JSON.stringify(object));
}

// read methods

export async function getData(storageKey: StorageKeys) {
  const rawData = localDb.getString(storageKey);
  return rawData ? JSON.parse(rawData) : null;
}
