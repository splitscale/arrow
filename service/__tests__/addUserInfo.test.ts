import { DuffleRequest } from 'duffle';
import { service } from '..';
import { deleteApp } from 'firebase/app';
import FirebaseConfigurer from '../dataAccess/firebase/firebaseConfigurer';

it('should be able to add a new userInfo to the database', async () => {
  const body = new Map<string, any>();
  body.set('firstName', 'john');
  body.set('lastName', 'wick');
  body.set('id', 'test-id');

  const request: DuffleRequest = {
    method: 'POST',
    url: '/api/userinfo',
    body: body,
  };

  try {
    const res = await service.resolve(request);
    console.log(res);
    Promise.resolve();
  } catch (error) {
    console.error(error);
    Promise.reject();
  }
});

afterAll(async () => {
  await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
});
