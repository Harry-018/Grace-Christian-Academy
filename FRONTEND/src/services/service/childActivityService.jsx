import API from "../../api/API";

export const updateChildActivity = (id, data) => {
  return API.patch(`/updateactivity/${id}`, data);
};
export const postChildActivity = (data) => {
  return API.post(`/postactivity`, data);
};
export const deleteChildActivity = (id) => {
  return API.delete(`/deleteactivity/${id}`, id);
};
