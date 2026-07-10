import API from "../../api/API";

export const getGrades = async () => {
  const { data } = await API.get("/getgradelevel");
  return data;
};

export const getTuition = async (id) => {
  const { data } = await API.get(`/gettuition/${id}`);
  return data;
};

export const createGrade = async (data) => {
  return API.post("/creategrade", data);
};
export const updateGrade = async (id, data) => {
  return API.patch(`/patchgrade/${id}`, data);
};
export const deleteGrade = async (id) => {
  return API.delete(`/deletegrade/${id}`);
};

export const createMethod = async (data) => {
  return API.post("/createmethod", data);
};
