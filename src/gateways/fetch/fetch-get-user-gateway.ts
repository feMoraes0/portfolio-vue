import { GetUserGateway } from "../user-gateway";

export default class FetchGetUserGateway implements GetUserGateway {
  async execute(username: string): Promise<object> {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
}
