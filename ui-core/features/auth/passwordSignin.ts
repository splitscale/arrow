import { signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseAccessor from '../../../service/dataAccess/firebase/firebaseAccessor';
import { FirebaseError } from 'firebase/app';
import { User } from '../../types/user';
import FirebaseConfigurer from '../../../service/dataAccess/firebase/firebaseConfigurer';

export async function passwordSignin(email: string, password: string) {
  if (!FirebaseConfigurer.getFirebaseApp()) FirebaseConfigurer.init();

  try {
    const res = await signInWithEmailAndPassword(
      FirebaseAccessor.getAuth(),
      email,
      password
    );

    const user: Partial<User> = {
      id: res.user.uid,
      email: email,
      firstName: undefined,
      lastName: undefined,
    };

    return user;
  } catch (error) {
    const err = error as FirebaseError;

    throw new Error(err.message);
  }
}
