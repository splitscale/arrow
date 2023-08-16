import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { ListingRepositoryInteractor } from '../listingRepositoryInteractor';

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

    const userId = body?.get('userId');
    const images = body?.get('images');
    const coordinates = body?.get('coordinates');
    const propertyName = body?.get('propertyName');
    const bedType = body?.get('bedType');
    const description = body?.get('description');
    const amenities = body?.get('amenities');
    const prices = body?.get('prices');
    const availabilityStatus = body?.get('availabilityStatus');
    const houseRules = body?.get('houseRules');

    const docId = body?.get('id');
    const metadata = body?.get('metadata');

    try {
      const id = await this.interactor.add({
        id: docId,
        data: {
          userId: userId,
          images: images,
          coordinates: coordinates,
          propertyName: propertyName,
          bedType: bedType,
          description: description,
          amenities: amenities,
          prices: prices,
          availabilityStatus: availabilityStatus,
          houseRules: houseRules
        },
        metadata: metadata,
      });

      const res: DuffleResponse = {
        status: 'OK',
        body: id,
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