import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { UserInfoRepositoryInteractor } from '../userInfoRepositoryInteractor';

export class AddUserInfoHandler extends BaseHandler {
  private readonly interactor: UserInfoRepositoryInteractor;

  constructor(db: BaseRepository) {
    super();

    this.method = 'POST';
    this.endpoint = '/api/userinfo';
    this.interactor = new UserInfoRepositoryInteractor(db);
  }

  public async handle(request: DuffleRequest): Promise<DuffleResponse> {
    const firstName = request.body?.get('firstName');
    const lastName = request.body?.get('lastName');

    try {
      const id = await this.interactor.add({
        firstName: firstName,
        lastName: lastName,
      });

      const res: DuffleResponse = {
        status: 'OK',
        body: id,
      };

      return res;
    } catch (error) {
      const res: DuffleResponse = {
        status: 'ERROR',
        body: error as string,
      };

      return Promise.reject(res);
    }
  }
}
