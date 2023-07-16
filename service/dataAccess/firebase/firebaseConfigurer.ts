import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../env.secret';

export default class FirebaseConfigurer {
  private static getFirebaseConfig(): FirebaseOptions {
    return firebaseConfig;
  }

  public static getFirebaseApp(): FirebaseApp {
    return initializeApp(this.getFirebaseConfig());
  }
}
