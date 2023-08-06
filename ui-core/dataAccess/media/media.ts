export interface Media {
  localId: string;
  base64: string;
  uri: string;
  width: number;
  height: number;
  fileSize: number;
  fileType: string;
  fileName: string;
}

export type PartialMedia = Partial<Media>;
