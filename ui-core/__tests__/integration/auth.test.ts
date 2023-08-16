import { deleteApp } from 'firebase/app';
import FirebaseConfigurer from '../../../service/dataAccess/firebase/firebaseConfigurer';
import { passwordSignup } from '../../features/auth/passwordSignup';
import { passwordSignin } from '../../features/auth/passwordSignin';
import { signOutCurrentUser } from '../../features/auth/signOutCurrentUser';

describe('Authentication provider tests', () => {
  beforeAll(() => {
    if (!FirebaseConfigurer.getFirebaseApp()) FirebaseConfigurer.init();
  });

  it('should create a new email and password based user', async () => {
    try {
      const user = await passwordSignup('johnwick@gmail.com', 'randomPassword');

      expect(user.id).not.toBeUndefined();
    } catch (error) {
      const err = error as Error;

      expect(err.message).toBe('Firebase: Error (auth/email-already-in-use).');
    }
  });

  it('should sign in the user via email and password', async () => {
    try {
      const user = await passwordSignin('johnwick@gmail.com', 'randomPassword');

      expect(user.id).not.toBeUndefined();
    } catch (error) {
      const err = error as Error;

      console.error(err);

      expect(err).toBeInstanceOf(Error);
    }
  });

  it('should logout the current user', async () => {
    try {
      const isSignedOut = await signOutCurrentUser();

      expect(isSignedOut).toBeTruthy();
    } catch (error) {
      const err = error as Error;

      console.error(err);

      expect(err).toBeInstanceOf(Error);
    }
  });

  afterAll(async () => {
    await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
  });
});
