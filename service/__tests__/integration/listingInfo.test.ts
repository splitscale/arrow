import { DuffleRequest } from 'duffle';
import { deleteApp } from 'firebase/app';
import { service } from '../..';
import FirebaseConfigurer from '../../dataAccess/firebase/firebaseConfigurer';

describe('Listing info integration test', () => {
  it('should be able to add a new property listing to the database', async () => {
    const data = {
      userId: 'test-userId',
      images: 'test-images',
      coordinates: { lat: 72, long: 144 },
      propertyName: 'test-propertyName',
      bedType: 'test-bedType',
      description: 'test-description',
      amenities: 'test-amenities',
      prices: 'test-prices',
      availabilityStatus: 'test-availabilityStatus',
      houseRules: 'test-houseRules',
    };

    const body = new Map<string, any>();
    body.set('id', 'test-id');
    body.set('data', data);

    const request: DuffleRequest = {
      method: 'POST',
      url: '/api/listinginfo',
      body: body,
    };

    try {
      const res = await service.resolve(request);
      console.log(res);
      return Promise.resolve();
    } catch (error) {
      console.error(error);
      return Promise.reject();
    }
  });

  it('should be able to read one listing information', async () => {
    const body = new Map<string, any>();
    body.set('id', 'test-id');

    const request: DuffleRequest = {
      method: 'GET',
      url: '/api/listinginfo/id',
      body: body,
    };

    try {
      const res = await service.resolve(request);
      console.log(res);
      return Promise.resolve();
    } catch (error) {
      console.error(error);
      return Promise.reject();
    }
  });

  it('should be able to return all listing info', async () => {
    const request: DuffleRequest = {
      method: 'GET',
      url: '/api/listinginfo',
    };

    try {
      const res = await service.resolve(request);
      console.log(res);
      return Promise.resolve();
    } catch (error) {
      console.error(error);
      return Promise.reject();
    }
  });

  afterAll(async () => {
    await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
  });
});
