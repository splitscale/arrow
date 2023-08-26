import { ENCRYPTION_KEY } from '@env';
import { MMKV } from 'react-native-mmkv';

export const currentUserStorage = new MMKV({
  id: 'currentUser',
  encryptionKey: ENCRYPTION_KEY,
});
