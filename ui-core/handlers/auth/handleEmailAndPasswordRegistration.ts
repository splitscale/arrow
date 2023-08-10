import { passwordSignup } from '../../features/auth/passwordSignup';
import { handlePersistCurrentUser } from '../user/handlePersistCurrentUser';

export async function handleEmailAndPasswordRegistration(
  email: string,
  password: string
) {
  const user = await passwordSignup(email, password);
  handlePersistCurrentUser(user);
}
