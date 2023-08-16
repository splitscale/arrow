import { convertPartialToObject } from '../../../utils/convertPartialToObject';
import { logger } from '../../../utils/logger';
import { passwordSignup } from '../../features/auth/passwordSignup';
import { handleUploadUseInfo } from '../user/database/handleUploadUserInfo';
import { handlePersistCurrentUser } from '../user/handlePersistCurrentUser';

export async function handleEmailAndPasswordRegistration(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const user = await passwordSignup(email, password);

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;

  logger.debug(user);

  const solidUser = convertPartialToObject(user);

  logger.debug(solidUser);

  const res = await handleUploadUseInfo(solidUser);

  logger.debug(res);

  if (res.status === 'ERROR') {
    throw new Error(
      'Something went wrong while uploading user information to the server.'
    );
  }

  handlePersistCurrentUser(user);
}
