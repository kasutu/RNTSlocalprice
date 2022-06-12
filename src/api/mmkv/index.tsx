import { MMKV } from 'react-native-mmkv';

export const localDb = new MMKV();

// save methods

export function storeData(storageKey: 'user', object: any) {
  localDb.set(storageKey, JSON.stringify(object));
}

// read methods

export async function getData(storageKey: 'user') {
  const rawData = localDb.getString(storageKey);
  return rawData ? JSON.parse(rawData) : null;
}
