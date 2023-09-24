import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { ListingRepositoryInteractor } from '../listingRepositoryInteractor';

export class UpdateListingInfoHandler extends BaseHandler{
    private readonly interactor: ListingRepositoryInteractor;

    constructor(db: BaseRepository){
        super();

        this.method = 'PUT';
        this.endpoint = 'api/listinginfo';
        this.interactor =  new ListingRepositoryInteractor(db);

    }

    public async handle(request: DuffleRequest): Promise<DuffleResponse>{

        const body = request.body as Map<string, any> | undefined;
        console.log(body);
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

        try{
            const data = await this.interactor.update(docId, {
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
              });

              if (!data) {
                throw new Error(`Error updating doc ${docId}`);
              }
        
              const res: DuffleResponse = {
                status: 'OK',
                body: data,
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