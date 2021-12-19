import GithubApi from '@/services/github-api';
import axios from 'axios';

jest.mock('axios');

describe('Gtihub API service', () => {
  const githubApi = GithubApi;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should call axios get method and return an filled object when getUser is called with success answer', async () => {
    // GIVEN
    const dataMock = {
      name: 'test',
      bio: 'test',
      location: 'test',
    };
    axios.get.mockImplementation(
      () => Promise.resolve({ status: 200, data: dataMock }),
    );
    // WHEN
    const response = await githubApi.getUser();
    // THEN
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      name: dataMock.name,
      profession: dataMock.bio,
      location: dataMock.location,
    });
  });

  it('Should return undefined when getUser is called with get response has status different of 200', async () => {
    // GIVEN
    axios.get.mockImplementation(
      () => Promise.resolve({ status: 204, data: {} }),
    );
    // WHEN
    const response = await githubApi.getUser();
    // THEN
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(response).toBe(undefined);
  });

  it('Should throw an error and return undefined when getUser is called with connection error', async () => {
    // GIVEN
    axios.get.mockImplementation(
      () => Promise.reject(),
    );
    // WHEN
    const response = await githubApi.getUser();
    // THEN
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(response).toBe(undefined);
  });
});
