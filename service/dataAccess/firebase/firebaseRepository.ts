import BaseRepository from '../../repository/baseRepository';
import {
  RepositoryDocumentRequestOf,
  RepositoryDocumentResponseOf,
} from '../../repository/repositoryTypes';
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { uuid } from '../uuid';
import { logger } from '../../utils/logger';

export class FirebaseRepository implements BaseRepository {
  private db: Firestore;

  constructor(db: Firestore) {
    this.db = db;
  }

  async insert<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<boolean> {
    const id = uuid();

    try {
      await setDoc(doc(this.db, collection, id), document);
      logger.info('inserted a document in: ' + collection);

      return true;
    } catch (error) {
      logger.error(error as string);
      return false;
    }
  }

  async insertWithId<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<string | null> {
    if (!document.id) throw new Error('Id is required');
    const id = document.id;
    const docData = document.data as Object;

    logger.info('inserting: ' + id);

    try {
      await setDoc(doc(this.db, collection, id), docData);
      logger.info(`inserted {${id}} in: ` + collection);
      return id;
    } catch (error) {
      logger.error(error as string);
      return Promise.reject(error);
    }
  }

  async find<T>(
    collection: string,
    filters: Map<string, any>
  ): Promise<T | null> {
    const id = filters.get('id');
    const docRef = doc(this.db, collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as T;
    } else {
      logger.error(`Document {${id}} Does not exist`);
      return null;
    }
  }

  async hasAny(
    collectionRef: string,
    filters?: Map<string, any> | undefined
  ): Promise<boolean> {
    const querySnapshot = await getDocs(collection(this.db, collectionRef));
    return !querySnapshot.empty;
  }

  async update<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>,
    filters?: Map<string, any>
  ): Promise<boolean> {
    const id = document.id;
    const data = document.data;

    try {
      if (!id) return Promise.reject('id is required when updating');
      if (!data) return Promise.reject('data is required when updating');

      const documentRef = doc(this.db, collection, id);
      updateDoc(documentRef, data);

      logger.info(`Document {${id}} updated successfully`);
      return true;
    } catch (error) {
      logger.error(`Error updating document {${id}} with an error: `);
      return false;
    }
  }

  async getAll<T>(
    collectionName: string,
    filters?: Map<string, any> | undefined
  ): Promise<RepositoryDocumentResponseOf<T>[]> {
    let collectionRef = collection(this.db, collectionName);

    const searchQuery = query(collectionRef);

    const querySnapshot = await getDocs(searchQuery);
    const res: RepositoryDocumentResponseOf<T>[] = [];

    try {
      if (querySnapshot.empty) {
        throw new Error(`Cannot get all, Collection {${collection}} is empty`);
      }

      querySnapshot.forEach((doc) => {
        res.push({ id: doc.id, data: doc.data() as T });
      });

      return res;
    } catch (error) {
      logger.error(error as string);
      return Promise.reject(error);
    }
  }

  async getFirst<T>(
    collection: string,
    filters?: Map<string, any>
  ): Promise<RepositoryDocumentResponseOf<T>> {
    try {
      const results = await this.getAll<T>(collection);

      if (results.length === 0) {
        throw new Error(
          `Cannot get first, Collection {${collection}} is empty`
        );
      }

      return results[0];
    } catch (error) {
      logger.error(error as string);
      return Promise.reject(error);
    }
  }

  async deleteOne(
    collection: string,
    filters?: Map<string, any> | undefined
  ): Promise<void> {
    const id = filters?.get('id');
    if (!id) return Promise.reject('id is required when updating');

    try {
      await deleteDoc(doc(this.db, collection, id));
      logger.info(`Document {${id}} deleted in: ${collection}`);
    } catch (error) {
      logger.error(error as string);
      Promise.reject(
        `Error deleting document: {${id}} in {${collection}} collection`
      );
    }
  }

  async deleteAll(
    collectionRef: string,
    filters?: Map<string, any> | undefined
  ): Promise<void> {
    try {
      const querySnapshot = await getDocs(
        query(collection(this.db, collectionRef))
      );

      if (querySnapshot.empty) {
        logger.error('deleteAll failed');
        return Promise.reject(`Collection {${collection}} is empty`);
      }

      const batch = writeBatch(this.db);

      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      logger.info('deleted all documents in: ' + collection);
      return;
    } catch (error) {
      logger.error(error as string);
      return Promise.reject(
        `Error when deleting documents in {${collection}} collection: ${error}`
      );
    }
  }
}
