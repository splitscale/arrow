import { MMKV } from 'react-native-mmkv';

export const currentUserStorage = new MMKV({
  id: 'currentUser',
  encryptionKey: process.env.EXPO_PUBLIC_ENCRYPTION_KEY,
});
