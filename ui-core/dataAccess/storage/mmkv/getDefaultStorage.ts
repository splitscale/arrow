import { MMKV } from 'react-native-mmkv';

export function getDefaultStorage() {
  return new MMKV();
}
