export interface Media {
  localId: string | null | undefined;
  base64: string | null | undefined;
  uri: string;
  width: number;
  height: number;
  fileSize: number | undefined;
  fileType: 'video' | 'image' | undefined;
  fileName: string | null | undefined;
}

export type PartialMedia = Partial<Media>;
