import API from "../../api/API";

export const updateAcadPrograms = (id, data) => {
  return API.patch(`/updateacadprog/${id}`, data);
};
export const postAcadPrograms = (data) => {
  return API.post(`/postacadprog`, data);
};
export const deleteAcadPrograms = (id) => {
  return API.delete(`/deleteacadprog/${id}`, id);
};
