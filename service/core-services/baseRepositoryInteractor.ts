import BaseRepository from '../repository/baseRepository';

export class BaseRepositoryInteractor<T> {
  protected readonly db: BaseRepository;
  protected collectionPath: string;

  protected constructor(db: BaseRepository) {
    this.db = db;
    this.collectionPath = '';
  }

  async add(data: T): Promise<string | null> {
    return await this.db.insertWithId<T>(this.collectionPath, { data });
  }

  async update(docId: string, data: T) {
    const filters = new Map<string, any>();
    filters.set('id', docId);

    return this.db.update(this.collectionPath, filters, { data: data });
  }

  async delete(docId: string) {
    const filters = new Map<string, any>();
    filters.set('id', docId);

    return await this.db.deleteOne(this.collectionPath, filters);
  }

  async getOne(docId: string) {
    const filters = new Map<string, any>();
    filters.set('id', docId);

    return await this.db.find<T>(this.collectionPath, filters);
  }

  async getAll() {
    return await this.db.getAll<T>(this.collectionPath);
  }
}
