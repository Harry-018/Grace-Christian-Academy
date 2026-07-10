import API from "../api/API.js";

export const transpoLoader = async () => {
  try {
    const [transpoRes] = await Promise.all([API.get("/transpo")]);

    return {
      transpoData: transpoRes.data,
    };
  } catch (error) {
    if (error.response) {
      console.error("Backend Database Error Data:", error.response.data);
    }
    throw error;
  }
};
