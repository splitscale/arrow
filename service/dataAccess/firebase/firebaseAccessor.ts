import { FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import FirebaseConfigurer from './firebaseConfigurer';
import { getAuth } from 'firebase/auth';

export default class FirebaseAccessor {
  private static getApp(): FirebaseApp {
    return FirebaseConfigurer.getFirebaseApp();
  }

  public static getDb(): Firestore {
    return getFirestore(this.getApp());
  }

  public static getStorage(): FirebaseStorage {
    return getStorage(this.getApp());
  }

  public static getAuth() {
    return getAuth(this.getApp());
  }
}
