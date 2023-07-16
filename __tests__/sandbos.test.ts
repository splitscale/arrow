import {
  HandlerRegistratorCollector,
  HandlerResolver,
  DuffleRequest,
} from 'duffle';
import { UserInfoRegistrator } from '../service/core-services/userInfoManagementService/userInfoRegistrator';
import { FirebaseRepository } from '../service/data/firebaseRepository';

it('should be able to add a new userInfo to the database', async () => {
  const db: FirebaseRepository = new FirebaseRepository();

  const collector = new HandlerRegistratorCollector([
    new UserInfoRegistrator(db),
  ]);

  const resolver = new HandlerResolver(collector);

  const body = new Map<string, any>();
  body.set('firstName', 'John');
  body.set('lastName', 'doe');

  const request: DuffleRequest = {
    method: 'POST',
    url: '/api/userinfo',
    body: body,
  };

  let res;

  try {
    res = await resolver.resolve(request);
  } catch (error) {
    console.error(error);
    console.info('ERROR IS HANDLED CORRECTLY');
  }

  console.log(res);
});
