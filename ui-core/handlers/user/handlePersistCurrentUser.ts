import { logger } from '../../../utils/logger';
import { setCurrentUser } from '../../dataAccess/storage/currentUser/setCurrentUser';
import { currentUserStorage } from '../../dataAccess/storage/mmkv/currentUserStorage';
import { User } from '../../types/user';

export function handlePersistCurrentUser(user: Partial<User>) {
  setCurrentUser(currentUserStorage, user);
  logger.debug('Persisted as current user: ' + user.id);
}
