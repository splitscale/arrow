import { HandlerRegistratorCollector, HandlerResolver } from 'duffle';
import { UserInfoRegistrator } from './core-services/userInfoManagementService/userInfoRegistrator';
import FirebaseAccessor from './dataAccess/firebase/firebaseAccessor';
import { FirebaseRepository } from './dataAccess/firebase/firebaseRepository';
import FirebaseConfigurer from './dataAccess/firebase/firebaseConfigurer';
import { ListingRegistrator } from './core-services/listingInfoManagement/listingRegistrator';

const Service = (): HandlerResolver => {
  if (!FirebaseConfigurer.getFirebaseApp()) FirebaseConfigurer.init();

  const db: FirebaseRepository = new FirebaseRepository(
    FirebaseAccessor.getDb()
  );

  const collector = new HandlerRegistratorCollector([
    new UserInfoRegistrator(db),
    new ListingRegistrator(db),
  ]);

  const resolver = new HandlerResolver(collector);

  return resolver;
};

export const service = Service();
