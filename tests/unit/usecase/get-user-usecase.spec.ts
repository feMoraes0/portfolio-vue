import GetUserUsecase, { UserModelUsecase } from "@/usecases/get-user-usecase";
import { GetUserGateway } from '@/gateways/user-gateway';

describe('usecases/get-user-usecase', () => {
  const GetUserUsecaseFactory = (
    getUserGateway: GetUserGateway,
    username: string,
  ) => new GetUserUsecase(getUserGateway, username);

  describe('When execute is called', () => {
    it('Then should call get user gateway`s execute function with username', async () => {
      const getUserGatewayMock = {
        execute: jest.fn(),
      } as unknown as GetUserGateway ;
      const username = 'any_user_name';
      const getUserUsecase = GetUserUsecaseFactory(getUserGatewayMock, username);
      // WHEN
      await getUserUsecase.execute();
      // THEN
      expect(getUserGatewayMock.execute).toHaveBeenCalledTimes(1);
      expect(getUserGatewayMock.execute).toHaveBeenCalledWith(username);
    });

    it('Then should return an UserModelUsecase object as response', async () => {
      const userResponseMock: UserModelUsecase = {
        name: 'any_name',
        city: 'any_city',
        position: 'any_position',
        company: 'any_company',
      }
      const getUserGatewayMock = {
        execute: jest.fn().mockResolvedValueOnce(userResponseMock),
      } as unknown as GetUserGateway ;
      const username = 'any_user_name';
      // WHEN
      const getUserUsecase = GetUserUsecaseFactory(getUserGatewayMock, username);
      const response = await getUserUsecase.execute();
      // THEN
      expect(response).toEqual(userResponseMock);
    });
  });
});
