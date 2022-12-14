import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "bb4f2483-48d4-4f6a-9719-15fa799b6ff0",
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};
export const followUser = (userId) => {
  return instance.post(`follow/${userId}`, {}).then((response) => {
    return response.data;
  });
};
export const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`, {}).then((response) => {
    return response.data;
  });
};
