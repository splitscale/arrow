import { deleteApp } from 'firebase/app';
import FirebaseConfigurer from '../../../service/dataAccess/firebase/firebaseConfigurer';
import { passwordSignup } from '../../features/auth/passwordSignup';

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

  afterAll(async () => {
    await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
  });
});
