import API from "../../api/API";

export const updateBanner = (id, data) => {
  return API.patch(`/updatebanner/${id}`, data);
};
