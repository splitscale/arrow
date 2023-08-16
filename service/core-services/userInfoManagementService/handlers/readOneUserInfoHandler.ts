import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { UserInfoRepositoryInteractor } from '../userInfoRepositoryInteractor';

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

   // const firstName = body?.get('firstName');
   // const lastName = body?.get('lastName');
   // const username = body?.get('username');
   // const email = body?.get('email');
   // const profilePic = body?.get('profilePic');
   // const phoneNumber = body?.get('phoneNumber');
    const docId = body?.get('id');
   // const metadata = body?.get('metadata');

    try {
      const data = await this.interactor.getOne(docId);

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
