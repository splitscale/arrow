import { randomUUID } from 'crypto';
import BaseRepository from '../repository/baseRepository';
import {
  RepositoryDocumentRequestOf,
  RepositoryDocumentResponseOf,
} from '../repository/repositoryTypes';

export class FirebaseRepository implements BaseRepository {
  insert<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async insertWithId<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<string | null> {
    console.log(document);
    return await Promise.resolve(randomUUID().toString());
    // return await Promise.reject(
    //   'internal error should occur from insertWithId'
    // );
  }

  find<T>(collection: string, filters: Map<string, any>): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  hasAny(
    collection: string,
    filters?: Map<string, any> | undefined
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  update<T>(
    collection: string,
    filters: Map<string, any>,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getAll<T>(
    collection: string,
    filters?: Map<string, any> | undefined
  ): Promise<RepositoryDocumentResponseOf<T>[]> {
    throw new Error('Method not implemented.');
  }

  getFirst<T>(
    collection: string,
    filters: Map<string, any>
  ): Promise<RepositoryDocumentResponseOf<T> | null> {
    throw new Error('Method not implemented.');
  }

  deleteOne(
    collection: string,
    filters?: Map<string, any> | undefined
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteAll(
    collection: string,
    filters?: Map<string, any> | undefined
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
