import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/femoraes0';

export default {
  getUser: async () => {
    try {
      const { data, status } = await axios.get(BASE_URL);

      if (status === 200) {
        return {
          name: data.name,
          profession: data.bio,
          location: data.location,
        };
      }

      return undefined;
    } catch (e) {
      return undefined;
    }
  },
};
