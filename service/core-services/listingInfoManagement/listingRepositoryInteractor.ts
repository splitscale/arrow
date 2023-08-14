import BaseRepository from '../../repository/baseRepository';
import { BaseRepositoryInteractor } from '../baseRepositoryInteractor';
import { ListingInfo } from './type/listingInfoType';

export class ListingRepositoryInteractor extends BaseRepositoryInteractor<ListingInfo> {
  constructor(db: BaseRepository) {
    super(db);
    this.collectionPath = 'listing.info';
  }
}