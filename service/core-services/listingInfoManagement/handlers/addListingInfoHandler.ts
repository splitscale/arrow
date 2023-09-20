import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { ListingRepositoryInteractor } from '../listingRepositoryInteractor';
import { UserInfo } from 'firebase/auth';
import { convertMapToObject } from '../../../../utils/convertMapToObject';
import { ObjectWithIdWrapperWithMetadata } from '../../../repository/repositoryTypes';
import { ListingInfo } from '../type/listingInfoType';

export class AddListingInfoHandler extends BaseHandler {
  private readonly interactor: ListingRepositoryInteractor;

  constructor(db: BaseRepository) {
    super();

    this.method = 'POST';
    this.endpoint = '/api/listinginfo';
    this.interactor = new ListingRepositoryInteractor(db);
  }

  public async handle(request: DuffleRequest): Promise<DuffleResponse> {
    const body = request.body as Map<string, any> | undefined;

    if (!body) {
      throw new Error('cannot add user info, request body is undefined');
    }

    const { id, data, metadata } =
      convertMapToObject<
        ObjectWithIdWrapperWithMetadata<ListingInfo, string, any>
      >(body);

    console.log([id, data, metadata]);

    try {
      const resId = await this.interactor.add({
        id: id,
        data: data,
        metadata: metadata,
      });

      const res: DuffleResponse = {
        status: 'OK',
        body: resId,
      };

      return Promise.resolve(res);
    } catch (error) {
      const res: DuffleResponse = {
        status: 'ERROR',
        body: error as string,
      };

      return Promise.reject(res);
    }
  }
}
