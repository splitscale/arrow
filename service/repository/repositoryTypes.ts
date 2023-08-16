export interface RepositoryDocumentResponseOf<T> {
  id: string;
  data: T;
  metadata?: Map<string, any>;
}

export interface RepositoryDocumentRequestOf<T> {
  id?: string;
  data: T;
  metadata?: Map<string, any>;
}

export type ObjectWithIdWrapper<T, ID extends string | number> = {
  id: ID;
} & T;

export type ObjectWithIdWrapperWithMetadata<
  T,
  ID extends string | number,
  Meta = null
> = ObjectWithIdWrapper<T, ID> & {
  metadata: Meta; // Setting the default value of metadata to null
};
