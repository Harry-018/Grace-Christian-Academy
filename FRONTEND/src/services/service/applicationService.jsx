import API from "../../api/API.js";

export const applyApplication = (data) => {
  return API.post("/apply", data);
};
