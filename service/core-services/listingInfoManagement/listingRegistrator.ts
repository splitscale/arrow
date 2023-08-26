import { BaseHandlerRegistrator } from 'duffle/bin/baseHandlerRegistrator';
import BaseRepository from '../../repository/baseRepository';
import { AddListingInfoHandler } from './handlers/addListingInfoHandler';
import { ReadOneListingInfoHandler } from './handlers/readOneListingInfoHandler';

export class ListingRegistrator extends BaseHandlerRegistrator {
  constructor(db: BaseRepository) {
    super();
    this.handlers.push(new AddListingInfoHandler(db));
    this.handlers.push(new ReadOneListingInfoHandler(db));
  }
}
