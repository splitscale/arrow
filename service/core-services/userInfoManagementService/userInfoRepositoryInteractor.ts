import BaseRepository from '../../repository/baseRepository';
import { BaseRepositoryInteractor } from '../baseRepositoryInteractor';
import { UserInfo } from './type/userInfoType';

export class UserInfoRepositoryInteractor extends BaseRepositoryInteractor<UserInfo> {
  constructor(db: BaseRepository) {
    super(db);
    this.collectionPath = 'user.info';
  }
}
