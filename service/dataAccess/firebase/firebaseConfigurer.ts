import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from '@env';

export default class FirebaseConfigurer {
  private static app: FirebaseApp;

  private static getFirebaseConfig(): FirebaseOptions {
    const firebaseConfig = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID,
      appId: APP_ID,
    };

    return firebaseConfig;
  }

  public static init(): void {
    this.app = initializeApp(this.getFirebaseConfig());
  }

  public static getFirebaseApp(): FirebaseApp {
    return this.app;
  }
}
