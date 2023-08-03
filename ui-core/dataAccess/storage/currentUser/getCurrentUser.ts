import { MMKV } from 'react-native-mmkv';
import { User } from '../../../types/user';

/**
 * get the current persisted user
 *
 * @returns User - if successful
 * @returns undefined - if failed
 */
export function getCurrentUser(storage: MMKV): User | undefined {
  const user = storage.getString('current');

  if (!user) return undefined;

  return JSON.parse(user) as User;
}
