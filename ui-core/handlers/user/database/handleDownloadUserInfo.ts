import { DuffleRequest } from 'duffle/bin/commonTypes';
import { service } from '../../../../service';
import { convertObjectToMap } from '../../../../utils/convertObjectToMap';

export async function handleDownloadUseInfo(id: string) {
  const body = convertObjectToMap({ id: id });

  const request: DuffleRequest = {
    method: 'GET',
    url: '/api/userinfo/id',
    body: body,
  };

  return await service.resolve(request);
}
