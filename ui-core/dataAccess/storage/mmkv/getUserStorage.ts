import { MMKV } from 'react-native-mmkv';
import { encryptionKey } from '../../../../env.secret';

export function getUserStorage(id: string) {
  return new MMKV({
    id: `user-${id}-storage`,
    encryptionKey: encryptionKey,
  });
}
