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
  })

  it('should be able to update a listing\'s information', async () =>{
    try {
      const bodyCopy = new Map<string, any>();
      bodyCopy.set('id', 'test-id');
      bodyCopy.set('userId', 'test-update-id');
      bodyCopy.set('images', 'test-update-image');
      bodyCopy.set('coordinates', 'test-update-coordinates');
      bodyCopy.set('propertyName', 'test-update-propertyName');
      bodyCopy.set('bedType', 'test-update-bedType');
      bodyCopy.set('description', 'test-update-description') ;
      bodyCopy.set('amenities', 'test-update-amenities');
      bodyCopy.set('prices', 'test-update-prices');
      bodyCopy.set('availabilityStatus', 'test-update-availabilityStatus');
      bodyCopy.set('houseRules','test-update-houseRules');


      const request: DuffleRequest = {
        method: 'PUT',
        url: 'api/listinginfo',
        body: bodyCopy
      }

      const res =  await service.resolve(request);
      console.log(res.body);
      Promise.resolve();

    } catch(error) {
      console.error(error);
      Promise.reject();
    }
  })

  afterAll(async () => {
    await Promise.all([deleteApp(FirebaseConfigurer.getFirebaseApp())]);
  });
});
