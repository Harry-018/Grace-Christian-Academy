import API from "../../api/API";

export const updateTranspo = (id, data) => {
  return API.patch(`/patchtranspo/${id}`, data);
};
export const postTranspo = (data) => {
  return API.post(`/posttranspo`, data);
};
export const deleteTranspo = (id) => {
  return API.delete(`/deletetranspo/${id}`, id);
};
