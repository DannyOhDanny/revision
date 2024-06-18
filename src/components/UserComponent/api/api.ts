import axios from 'axios';
import { BASE_URL } from '../../../utils/constants';

const usersAPI = {
  getUsers: () => {
    const headers = {
      'Content-Type': 'application/json'
    };

    return axios
      .get(`${BASE_URL}/users`, { headers })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Произошла ошибка при получении данных:', error);
        return null;
      });
  },

  getAlbums: (userId: string) => {
    const headers = {
      'Content-Type': 'application/json'
    };

    return axios
      .get(`${BASE_URL}/albums/${userId}`, { headers })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Произошла ошибка при получении данных:', error);
        return null;
      });
  }
};

export default usersAPI;
