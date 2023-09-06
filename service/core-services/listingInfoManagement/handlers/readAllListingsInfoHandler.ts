import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { ListingRepositoryInteractor } from '../listingRepositoryInteractor';

export class ReadAllListingsInfoHandler extends BaseHandler {

    private readonly interactor: ListingRepositoryInteractor;

    constructor(db: BaseRepository){
        super();

        this.method = 'GET';
        this.endpoint = '/api/listinginfo';
        this.interactor =  new ListingRepositoryInteractor(db);
        
    }

    public async handle(request: DuffleRequest): Promise<DuffleResponse> {
        try {
          const data = await this.interactor.getAll();
    
          if (!data) {
            throw new Error(`No listings`);
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