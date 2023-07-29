import { DuffleRequest } from 'duffle';
import { service } from '../service';
import { firebaseConfig } from '../env.secret';
import { deleteApp, getApps } from 'firebase/app';
import FirebaseConfigurer from '../service/dataAccess/firebase/firebaseConfigurer';
import { uuid } from '../service/dataAccess/uuid';

it('should be able to add a new userInfo to the database', async () => {
  const body = new Map<string, any>();
  body.set('firstName', 'john');
  body.set('lastName', 'wick');
  body.set('id', uuid());

  const request: DuffleRequest = {
    method: 'POST',
    url: '/api/userinfo',
    body: body,
  };

  console.log(firebaseConfig);

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
