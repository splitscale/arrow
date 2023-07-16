import { DuffleRequest } from 'duffle';
import { service } from '../service';

it('should be able to add a new userInfo to the database', async () => {
  const body = new Map<string, any>();
  body.set('firstName', 'john');
  body.set('lastName', 'wick');

  const request: DuffleRequest = {
    method: 'POST',
    url: '/api/userinfo',
    body: body,
  };

  const res = await service.resolve(request);

  console.log(res);
});
