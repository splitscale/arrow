import { PartialMedia } from './media';
import * as ImagePicker from 'expo-image-picker';

export type MediaPickerErrorCode =
  | 'camera_unavailable'
  | 'permission'
  | 'others';

export interface MediaPickerResponse {
  didCancel?: boolean;
  medias?: PartialMedia[];
}

export async function getImageLibrary() {
  const options: ImagePicker.ImagePickerOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  };

  const picker = await ImagePicker.launchImageLibraryAsync(options);

  const medias = picker.assets?.map((asset) => {
    const media: PartialMedia = {
      localId: asset.assetId,
      base64: asset.base64,
      uri: asset.uri,
      width: asset.width,
      height: asset.height,
      fileSize: asset.fileSize,
      fileType: asset.type,
      fileName: asset.fileName,
    };

    return media;
  });

  let res: MediaPickerResponse = {
    didCancel: picker.canceled,
    medias: medias,
  };

  return res;
}
