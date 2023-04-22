import axios from 'axios';

axios.defaults.baseURL = 'https://6442712233997d3ef9103c9c.mockapi.io/tweets';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const updateUser = async (id, activeFollow, followers) => {
  try {
    const response = await axios.put(`/users/${id}`, {
      following: activeFollow,
      followers: followers,
    });
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};
