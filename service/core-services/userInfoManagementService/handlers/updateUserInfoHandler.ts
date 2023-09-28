import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { UserInfoRepositoryInteractor } from '../userInfoRepositoryInteractor';

export class UpdateUserInfoHandler extends BaseHandler {
  private readonly interactor: UserInfoRepositoryInteractor;

  constructor(db: BaseRepository) {
    super();

    this.method = 'PUT';
    this.endpoint = '/api/userinfo';
    this.interactor = new UserInfoRepositoryInteractor(db);
  }

  public async handle(request: DuffleRequest): Promise<DuffleResponse> {
    const body = request.body as Map<string, any> | undefined;
    console.log(body);
    const firstName = body?.get('firstName');
    const lastName = body?.get('lastName');
    const userName = body?.get('userName');
    const email = body?.get('email');
    const photoUrl = body?.get('photoUrl');
    const phoneNumber = body?.get('phoneNumber');
    const docId = body?.get('id');
    //const metadata = body?.get('metadata');

    try {
      const data = await this.interactor.update(docId, {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        photoUrl: photoUrl,
        phoneNumber: phoneNumber,
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
