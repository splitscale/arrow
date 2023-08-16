import { signOut } from 'firebase/auth';
import FirebaseAccessor from '../../../service/dataAccess/firebase/firebaseAccessor';
import { FirebaseError } from 'firebase/app';
import FirebaseConfigurer from '../../../service/dataAccess/firebase/firebaseConfigurer';

export async function signOutCurrentUser() {
  if (!FirebaseConfigurer.getFirebaseApp()) FirebaseConfigurer.init();

  try {
    await signOut(FirebaseAccessor.getAuth());
    return true;
  } catch (error) {
    const err = error as FirebaseError;
    throw new Error(err.message);
  }
}
