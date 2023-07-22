import { HandlerRegistratorCollector, HandlerResolver } from 'duffle';
import { UserInfoRegistrator } from './core-services/userInfoManagementService/userInfoRegistrator';
import FirebaseAccessor from './dataAccess/firebase/firebaseAccessor';
import { FirebaseRepository } from './dataAccess/firebase/firebaseRepository';

const Service = (): HandlerResolver => {
  const db: FirebaseRepository = new FirebaseRepository(
    FirebaseAccessor.getDb()
  );

  const collector = new HandlerRegistratorCollector([
    new UserInfoRegistrator(db),
  ]);

  const resolver = new HandlerResolver(collector);

  return resolver;
};

export const service = Service();
