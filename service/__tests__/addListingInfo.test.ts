import { DuffleRequest } from 'duffle';
import { service } from '..';
import { deleteApp } from 'firebase/app';
import FirebaseConfigurer from '../dataAccess/firebase/firebaseConfigurer';

it('should be able to add a new property listing to the database', async () => {
  const body = new Map<string, any>();
  body.set('userId', 'test-userId');
  body.set('images', 'test-images');
  body.set('coordinates', {lat: 72, long: 144});
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
    Promise.resolve();
  } catch (error) {
    console.error(error);
    Promise.reject();
  }
});

afterAll(async () => {
  await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
});