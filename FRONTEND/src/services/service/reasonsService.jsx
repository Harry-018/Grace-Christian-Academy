import API from "../../api/API";

export const updateReason = (id, data) => {
  return API.patch(`/updatereasons/${id}`, data);
};

export const postReason = (data) => {
  return API.post(`/postreasons`, data);
};

export const deleteReason = (id) => {
  return API.delete(`/deletereasons/${id}`, id);
};
