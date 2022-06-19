export interface GetUserGateway {
  execute(username: string): Promise<object>
}
