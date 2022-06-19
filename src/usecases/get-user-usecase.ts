import { GetUserGateway } from '../gateways/user-gateway';

interface UserModelUsecase {
  name: string,
  city: string,
  position: string,
  company: string,
}

class GetUserUsecase {
  private getUserGateway: GetUserGateway;
  private username: string;

  constructor(getUserGateway: GetUserGateway, username: string) {
    this.getUserGateway = getUserGateway;
    this.username = username;
  }

  async execute(): Promise<UserModelUsecase|null> {
    const response = await this.getUserGateway.execute(this.username);

    if (!response) {
      return null;
    }

    const {
      name, location: city, position, company,
    }: any = response;

    return <UserModelUsecase> {
      name, city, position, company,
    };
  }
}

export default GetUserUsecase;
