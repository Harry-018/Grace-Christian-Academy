import API from "../../api/API.js";

export const AuthLogin = async (data) => {
  return API.post(`/authLogin`, data);
};
