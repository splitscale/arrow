import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../env.secret';

export default class FirebaseConfigurer {
  private static app: FirebaseApp;

  private static getFirebaseConfig(): FirebaseOptions {
    return firebaseConfig;
  }

  public static init(): void {
    this.app = initializeApp(this.getFirebaseConfig());
  }

  public static getFirebaseApp(): FirebaseApp {
    return this.app;
  }
}
