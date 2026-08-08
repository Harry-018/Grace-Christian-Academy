import API from "../../api/API";

export const updateHomeVideo = (id, data) => {
  return API.patch(`/updatehomevid/${id}`, data);
};
