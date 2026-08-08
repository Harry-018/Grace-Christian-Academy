import express from "express";

import { upload, videoUpload } from "../middleware/uploadMiddleware.js";

import {
  getBannerController,
  updateBannerController,
  getAcademicProgramsController,
  updateAcademicProgramsController,
  postAcademicProgramsController,
  deleteAcademicProgramsController,
  getMissionVisionController,
  updateMissionVisionController,
  getVideoController,
  updateVideoController,
  getReasonsController,
  updateReasonsController,
  postReasonsController,
  deleteReasonsController,
  getChildrenActivityController,
  updateChildrenActivityController,
  postChildrenActivityController,
  deleteChildrenActivityController,
} from "../controllers/homeController.js";

const router = express.Router();
//banner
router.get("/banner", getBannerController);
router.patch("/updatebanner/:id", updateBannerController);

//acad program card
router.get("/academiccard", getAcademicProgramsController);
router.patch(
  "/updateacadprog/:id",
  upload.single("program_image"),
  updateAcademicProgramsController,
);
router.post(
  "/postacadprog",
  upload.single("program_image"),
  postAcademicProgramsController,
);
router.delete("/deleteacadprog/:id", deleteAcademicProgramsController);

//mission vision
router.get("/missvis", getMissionVisionController);
router.patch("/updatemissvis/:type", updateMissionVisionController);

//home video
router.get("/homevid", getVideoController);
router.patch(
  "/updatehomevid/:id",
  videoUpload.single("home_video"),
  updateVideoController,
);

//why parents choose us
router.get("/reasons", getReasonsController);
router.patch("/updatereasons/:id", updateReasonsController);
router.post("/postreasons", postReasonsController);
router.delete("/deletereasons/:id", deleteReasonsController);

//children activities
router.get("/childactivity", getChildrenActivityController);
router.patch("/updateactivity/:id", updateChildrenActivityController);
router.post("/postactivity", postChildrenActivityController);
router.delete("/deleteactivity/:id", deleteChildrenActivityController);

export default router;
