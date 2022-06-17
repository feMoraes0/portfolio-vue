import { GetUserGateway } from '../gateways/user-gateway';

export interface UserModelUsecase {
  name: string,
  city: string,
  position: string,
  company: string,
}

export default class GetUserUsecase {
  private getUserGateway: GetUserGateway;
  private username: string;

  constructor(getUserGateway: GetUserGateway, username: string) {
    this.getUserGateway = getUserGateway;
    this.username = username;
  }

  async execute(): Promise<UserModelUsecase> {
    const gatewayResponse = await this.getUserGateway.execute(this.username);
    const response = { ...gatewayResponse } as UserModelUsecase;
    return response;
  }
}
