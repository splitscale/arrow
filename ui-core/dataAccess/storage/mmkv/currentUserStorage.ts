import { MMKV } from 'react-native-mmkv';
import { encryptionKey } from '../../../../env.secret';

export const currentUserStorage = new MMKV({
  id: 'currentUser',
  encryptionKey: encryptionKey,
});
