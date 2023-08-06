import { OptionsCommon, launchImageLibrary } from 'react-native-image-picker';
import { PartialMedia } from './media';

export type MediaPickerErrorCode =
  | 'camera_unavailable'
  | 'permission'
  | 'others';

export interface MediaPickerResponse {
  didCancel?: boolean;
  errorCode?: MediaPickerErrorCode;
  errorMessage?: string;
  medias?: PartialMedia[];
}

export async function getImageLibrary() {
  const options: OptionsCommon = {
    mediaType: 'photo',
  };

  const { didCancel, errorCode, errorMessage, assets } =
    await launchImageLibrary(options);
  const medias = assets?.map((asset) => {
    const media: PartialMedia = {
      localId: asset.id,
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
    didCancel: didCancel,
    errorCode: errorCode,
    errorMessage: errorMessage,
    medias: medias,
  };

  return res;
}
