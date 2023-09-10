import { DuffleRequest } from 'duffle';
import { service } from '../..';
import { deleteApp } from 'firebase/app';
import FirebaseConfigurer from '../../dataAccess/firebase/firebaseConfigurer';

describe('user info integration test', () => {
  it('should be able to add a new userInfo to the database', async () => {
    const data = {
      firstName: 'john',
      lastName: 'wick',
      userName: 'johnwick',
      email: 'wick@john.com',
      photoUrl: 'wick-pic',
      phoneNumber: '0912345689',
    };

    const body = new Map<string, any>();
    body.set('id', 'test-id');
    body.set('data', data);

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

  it('should be able to read all userInfo', async () => {
    const req: DuffleRequest = {
      method: 'GET',
      url: '/api/userinfo',
    };

    try {
      const res = await service.resolve(req);
      console.log(res.body);
      Promise.resolve();
    } catch (error) {
      console.error(error);
      Promise.reject();
    }
  });

  it('should be able to read one of the userInfo', async () => {
    const body = new Map<string, any>();
    body.set('id', 'test-id');

    const req: DuffleRequest = {
      method: 'GET',
      url: '/api/userinfo/id',
      body: body,
    };

    try {
      const res = await service.resolve(req);
      console.log(res.body);
      Promise.resolve();
    } catch (error) {
      console.error(error);
      Promise.reject();
    }
  });

  it('should be able to update userInfo', async () => {
    try {
      const bodyCopy = new Map<string, any>();
      bodyCopy.set('firstName', 'new john');
      bodyCopy.set('lastName', 'wick33');
      bodyCopy.set('userName', 'johnwick wwww');
      bodyCopy.set('email', 'wick@john.com');
      bodyCopy.set('photoUrl', 'wick-pic');
      bodyCopy.set('phoneNumber', '0912345689');
      bodyCopy.set('id', 'test-id');

      const req: DuffleRequest = {
        method: 'PUT',
        url: '/api/userinfo',
        body: bodyCopy,
      };
      const res = await service.resolve(req);
      console.log(res.body);
      Promise.resolve();
    } catch (error) {
      console.error(error);
      Promise.reject();
    }
  });

  it('should be able to delete userInfo', async () => {
    const body = new Map<string, any>();
    body.set('id', 'test-id');

    const req: DuffleRequest = {
      method: 'DELETE',
      url: '/api/userinfo',
      body: body,
    };

    try {
      const res = await service.resolve(req);
      console.log(res.body);
      Promise.resolve();
    } catch (error) {
      console.error(error);
      Promise.reject();
    }
  });

  afterAll(async () => {
    await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
  });
});
