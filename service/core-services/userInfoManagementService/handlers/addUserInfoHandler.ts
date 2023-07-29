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
    const body = request.body as Map<string, any> | undefined;

    const firstName = body?.get('firstName');
    const lastName = body?.get('lastName');
    const docId = body?.get('id');
    const metadata = body?.get('metadata');

    try {
      const id = await this.interactor.add({
        id: docId,
        data: {
          firstName: firstName,
          lastName: lastName,
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
