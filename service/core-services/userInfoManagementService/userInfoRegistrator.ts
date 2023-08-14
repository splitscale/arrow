import { BaseHandlerRegistrator } from 'duffle/bin/baseHandlerRegistrator';
import BaseRepository from '../../repository/baseRepository';
import { AddUserInfoHandler } from './handlers/addUserInfoHandler';
import { ReadAllUserInfoHandler } from './handlers/readAllUserInfoHandler';
import { UpdateUserInfoHandler } from './handlers/updateUserInfoHandler';
import { DeleteUserInfoHandler } from './handlers/deleteUserInfoHandler';
import { ReadOneUserInfoHandler } from './handlers/readOneUserInfoHandler';

export class UserInfoRegistrator extends BaseHandlerRegistrator {
  constructor(db: BaseRepository) {
    super();
    this.handlers.push(new AddUserInfoHandler(db));
    this.handlers.push(new ReadAllUserInfoHandler(db));
    this.handlers.push(new ReadOneUserInfoHandler(db));
    this.handlers.push(new UpdateUserInfoHandler(db));
    this.handlers.push(new DeleteUserInfoHandler(db));
  }
}
