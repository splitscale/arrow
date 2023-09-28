import { DuffleRequest } from 'duffle/bin/commonTypes';

import { service } from '../../../../service';
import { convertObjectToMap } from '../../../../utils/convertObjectToMap';
import { User } from '../../../types/user';

export async function handleUploadUseInfo(user: User) {
  const body = convertObjectToMap(user);

  const request: DuffleRequest = {
    method: 'POST',
    url: '/api/userinfo',
    body: body,
  };

  return await service.resolve(request);
}
