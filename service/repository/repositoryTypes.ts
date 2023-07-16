export interface RepositoryDocumentResponseOf<T> {
  id: string;
  data: T;
  metadata: Map<string, any>;
}

export interface RepositoryDocumentRequestOf<T> {
  id?: string;
  data: T;
  metadata?: Map<string, any>;
}
