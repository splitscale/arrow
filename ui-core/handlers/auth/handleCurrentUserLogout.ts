import { logger } from '../../../utils/logger';
import { signOutCurrentUser } from '../../features/auth/signOutCurrentUser';

export async function handleCurrentUserLogout() {
  const isLoggedOut = await signOutCurrentUser();

  logger.debug('isLoggedOut: ' + isLoggedOut);

  return isLoggedOut;
}
