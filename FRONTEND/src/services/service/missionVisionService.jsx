import API from "../../api/API";

export const updateMissVis = (type, data) => {
  return API.patch(`/updatemissvis/${type}`, data);
};
