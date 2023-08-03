import { MMKV } from 'react-native-mmkv';
import { User } from '../../../types/user';

export function setCurrentUser(storage: MMKV, data: User): void {
  storage.set('current', JSON.stringify(data));
}
