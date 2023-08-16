import { convertPartialToObject } from '../../../utils/convertPartialToObject';
import { logger } from '../../../utils/logger';
import { passwordSignin } from '../../features/auth/passwordSignin';
import { handleDownloadUseInfo } from '../user/database/handleDownloadUserInfo';
import { handlePersistCurrentUser } from '../user/handlePersistCurrentUser';

export async function handleEmailAndPasswordLogin(
  email: string,
  password: string
) {
  const user = await passwordSignin(email, password);

  logger.debug(user);

  const solidUser = convertPartialToObject(user);

  logger.debug(solidUser);

  const res = await handleDownloadUseInfo(solidUser.id);

  logger.debug(res);

  if (res.status === 'ERROR') {
    throw new Error(
      'Something went wrong while downloading user information from the server'
    );
  }

  handlePersistCurrentUser(user);
}
