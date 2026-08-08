import API from "../api/API.js";

export const homeLoader = async () => {
  try {
    // Run both API requests concurrently for faster performance
    const [
      bannerRes,
      academicCardRes,
      homeVidRes,
      missVisRes,
      reasonsRes,
      childActRes,
    ] = await Promise.all([
      API.get("/banner"),
      API.get("/academiccard"),
      API.get("/homevid"),
      API.get("/missvis"),
      API.get("/reasons"),
      API.get("/childactivity"),
    ]);

    return {
      bannerData: bannerRes.data,
      academicCardData: academicCardRes.data,
      homeVideoData: homeVidRes.data,
      mission_visionData: missVisRes.data,
      reasonsData: reasonsRes.data,
      childActivityData: childActRes.data,
    };
  } catch (error) {
    if (error.response) {
      console.error("Backend Database Error Data:", error.response.data);
    }
    throw error;
  }
};
