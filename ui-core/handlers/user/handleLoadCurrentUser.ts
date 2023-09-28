import { UserInfo } from '../../../service/core-services/userInfoManagementService/type/userInfoType';
import { logger } from '../../../utils/logger';
import { getCurrentUser } from '../../dataAccess/storage/currentUser/getCurrentUser';
import { currentUserStorage } from '../../dataAccess/storage/mmkv/currentUserStorage';
import { handleDownloadUseInfo } from './database/handleDownloadUserInfo';

export async function handleLoadCurrentUser() {
  const user = getCurrentUser(currentUserStorage);

  if (!user) {
    throw new Error('No persisted current user available to load');
  }

  logger.debug('Loaded as current user: ' + user.id);

  const currentUser = await handleDownloadUseInfo(user.id);

  if (currentUser.status === 'ERROR' && !currentUser.body) {
    throw new Error(
      'something went wrong while fetching User Info of: ' + user.id
    );
  }

  return currentUser.body as UserInfo;
}
