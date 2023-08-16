import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { UserInfoRepositoryInteractor } from '../userInfoRepositoryInteractor';
import { logger } from '../../../../utils/logger';

export class ReadOneUserInfoHandler extends BaseHandler {
  private readonly interactor: UserInfoRepositoryInteractor;

  constructor(db: BaseRepository) {
    super();

    this.method = 'GET';
    this.endpoint = '/api/userinfo/id';
    this.interactor = new UserInfoRepositoryInteractor(db);
  }

  public async handle(request: DuffleRequest): Promise<DuffleResponse> {
    const body = request.body as Map<string, any> | undefined;
    const docId = body?.get('id');

    try {
      const data = await this.interactor.getOne(docId);

      if (!data) {
        throw new Error(`Could not find ${docId}`);
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
