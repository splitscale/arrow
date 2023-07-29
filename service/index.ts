import { HandlerRegistratorCollector, HandlerResolver } from 'duffle';
import { UserInfoRegistrator } from './core-services/userInfoManagementService/userInfoRegistrator';
import FirebaseAccessor from './dataAccess/firebase/firebaseAccessor';
import { FirebaseRepository } from './dataAccess/firebase/firebaseRepository';
import FirebaseConfigurer from './dataAccess/firebase/firebaseConfigurer';

const Service = (): HandlerResolver => {
  if (!FirebaseConfigurer.getFirebaseApp()) FirebaseConfigurer.init();

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
