import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';

export default class FirebaseConfigurer {
  private static app: FirebaseApp;

  private static getFirebaseConfig(): FirebaseOptions {
    const firebaseConfig = {
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
      authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
      storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.EXPO_PUBLIC_APP_ID,
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
