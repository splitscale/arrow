import {
  RepositoryDocumentRequestOf,
  RepositoryDocumentResponseOf,
} from './repositoryTypes';

export default interface BaseRepository {
  /**
   * Inserts a document into the db
   * @param collection
   * @param document
   */
  insert<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<boolean>;

  insertWithId<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>
  ): Promise<string | null>;

  /**
   * Finds a specific document
   * checks is id exist in filters then it should handle the id first
   * @param collection
   * @param document
   */
  find<T>(collection: string, filters: Map<string, any>): Promise<T | null>;

  /**
   * Checks if there's an item in collection.
   * @param collection
   */
  hasAny(collection: string, filters?: Map<string, any>): Promise<boolean>;

  /**
   * Updates specific object in a collection
   * @param collection
   * @param filter
   * @param document
   */
  update<T>(
    collection: string,
    document: RepositoryDocumentRequestOf<T>,
    filters?: Map<string, any>
  ): Promise<boolean>;

  /**
   * Gets all item within the collection
   * @param collection
   * @param filters
   */
  getAll<T>(
    collection: string,
    filters?: Map<string, any>
  ): Promise<RepositoryDocumentResponseOf<T>[]>;

  getFirst<T>(
    collection: string,
    filters?: Map<string, any>
  ): Promise<RepositoryDocumentResponseOf<T>>;

  deleteOne(collection: string, filters?: Map<string, any>): Promise<void>;

  deleteAll(collection: string, filters?: Map<string, any>): Promise<void>;
}
