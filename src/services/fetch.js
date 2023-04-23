import axios from 'axios';

axios.defaults.baseURL = 'https://6442712233997d3ef9103c9c.mockapi.io/tweets';

export const fetchAll = async () => {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchUsers = async page => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchAllFilteredUsers = async following => {
  try {
    const response = await axios.get(`/users?following=${following}`);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchFilteredUsers = async (following, page) => {
  try {
    const response = await axios.get(
      `/users?following=${following}&page=${page}&limit=3`
    );
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
