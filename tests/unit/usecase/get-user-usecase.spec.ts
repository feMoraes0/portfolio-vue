import GetUserUsecase from '@/usecases/get-user-usecase';
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
      };
      const username = 'any_user_name';
      const getUserUsecase = GetUserUsecaseFactory(getUserGatewayMock, username);
      // WHEN
      await getUserUsecase.execute();
      // THEN
      expect(getUserGatewayMock.execute).toHaveBeenCalledTimes(1);
      expect(getUserGatewayMock.execute).toHaveBeenCalledWith(username);
    });

    it('Then should return an UserModelUsecase object as response', async () => {
      const getUserGatewayMock = {
        execute: jest.fn().mockResolvedValueOnce({
          name: 'any_name',
          location: 'any_city',
          position: 'any_position',
          company: 'any_company',
        }),
      };
      const username = 'any_user_name';
      // WHEN
      const getUserUsecase = GetUserUsecaseFactory(getUserGatewayMock, username);
      const response = await getUserUsecase.execute();
      // THEN
      expect(response).toEqual({
        name: 'any_name',
        city: 'any_city',
        position: 'any_position',
        company: 'any_company',
      });
    });
  });
});
