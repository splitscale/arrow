import { BaseHandler, DuffleRequest, DuffleResponse } from 'duffle';
import BaseRepository from '../../../repository/baseRepository';
import { UserInfoRepositoryInteractor } from '../userInfoRepositoryInteractor';
import { convertMapToObject } from '../../../../utils/convertMapToObject';
import { UserInfo } from '../type/userInfoType';
import { ObjectWithIdWrapperWithMetadata } from '../../../repository/repositoryTypes';

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

    if (!body) {
      throw new Error('cannot add user info, request body is undefined');
    }

    const {
      firstName,
      lastName,
      userName,
      email,
      photoUrl,
      phoneNumber,
      id,
      metadata,
    } =
      convertMapToObject<
        ObjectWithIdWrapperWithMetadata<UserInfo, string, any>
      >(body);

    try {
      const resId = await this.interactor.add({
        id: id,
        data: {
          firstName: firstName,
          lastName: lastName,
          userName: userName ?? null,
          email: email,
          photoUrl: photoUrl ?? null,
          phoneNumber: phoneNumber ?? null,
        },
        metadata: metadata ?? null,
      });

      if (!id) {
        throw new Error(`Could not add ${id}`);
      }

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
