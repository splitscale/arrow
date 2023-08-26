import { DuffleRequest } from 'duffle';
import { deleteApp } from 'firebase/app';
import { service } from '../..';
import FirebaseConfigurer from '../../dataAccess/firebase/firebaseConfigurer';

describe('Listing info integration test', () => {
  it('should be able to add a new property listing to the database', async () => {
    const body = new Map<string, any>();
    body.set('userId', 'test-userId');
    body.set('images', 'test-images');
    body.set('coordinates', { lat: 72, long: 144 });
    body.set('propertyName', 'test-propertyName');
    body.set('bedType', 'test-bedType');
    body.set('description', 'test-description');
    body.set('amenities', 'test-amenities');
    body.set('prices', 'test-prices');
    body.set('availabilityStatus', 'test-availabilityStatus');
    body.set('houseRules', 'test-houseRules');
    body.set('id', 'test-id');

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

  afterAll(async () => {
    await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
  });
});
