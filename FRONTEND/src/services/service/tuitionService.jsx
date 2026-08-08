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
export const updateMethod = async (id, data) => {
  return API.patch(`/patchmethod/${id}`, data);
};
export const deleteMethod = async (id) => {
  return API.delete(`/deletemethod/${id}`);
};

export const updateInstallment = async (
  grade_id,
  method_id,
  monthly_installment,
) => {
  return API.patch(
    `/patchinstallment/${grade_id}/${method_id}`,
    monthly_installment,
  );
};

export const removeInstallment = async (grade_id, method_id) => {
  return API.patch(`/removeinstallment/${grade_id}/${method_id}`);
};
