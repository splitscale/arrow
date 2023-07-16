import { BaseHandlerRegistrator } from 'duffle/bin/baseHandlerRegistrator';
import BaseRepository from '../../repository/baseRepository';
import { AddUserInfoHandler } from './handlers/addUserInfoHandler';

export class UserInfoRegistrator extends BaseHandlerRegistrator {
  constructor(db: BaseRepository) {
    super();
    this.handlers.push(new AddUserInfoHandler(db));
  }
}
