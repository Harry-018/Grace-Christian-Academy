import { getGrades } from "./service/tuitionService";

export const tuitionLoader = async () => {
  return {
    grades: await getGrades(),
  };
};
