import { MMKV } from 'react-native-mmkv';
import { currentUserStorage } from '../../dataAccess/storage/mmkv/currentUserStorage';
import { User } from '../../types/user';
import { setCurrentUser } from '../../dataAccess/storage/currentUser/setCurrentUser';
import { getCurrentUser } from '../../dataAccess/storage/currentUser/getCurrentUser';
import { deleteCurrentUser } from '../../dataAccess/storage/currentUser/deleteCurrentUser';

describe('Persisted Current User actions', () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = currentUserStorage;
  });

  it('should be able to persist the current user', () => {
    const user: User = {
      id: 'someId',
      firstName: 'john',
      lastName: 'doe',
    };

    setCurrentUser(storage, user);
  });

  it('should be able to read the current user', () => {
    const currentUser = getCurrentUser(storage);
    expect(currentUser?.id).toStrictEqual('someId');
  });

  it('should be able to delete the current user', () => {
    deleteCurrentUser(storage);

    const currentUser = getCurrentUser(storage);
    expect(currentUser).toBeUndefined();
  });

  afterAll(() => {
    storage.clearAll();
    expect(storage.toString()).toStrictEqual('MMKV (currentUser): []');
  });
});
