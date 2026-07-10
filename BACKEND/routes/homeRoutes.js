import express from "express";

import {
  getBannerController,
  updateBannerController,
  getAcademicProgramsController,
  updateAcademicProgramsController,
  postAcademicProgramsController,
  deleteAcademicProgramsController,
  getMissionVisionController,
  updateMissionVisionController,
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
router.get("/banner", getBannerController);
router.patch("/updatebanner/:id", updateBannerController);

router.get("/academiccard", getAcademicProgramsController);
router.patch("/updateacadprog/:id", updateAcademicProgramsController);
router.post("/postacadprog", postAcademicProgramsController);
router.delete("/deleteacadprog/:id", deleteAcademicProgramsController);

router.get("/missvis", getMissionVisionController);
router.patch("/updatemissvis/:type", updateMissionVisionController);

router.get("/reasons", getReasonsController);
router.patch("/updatereasons/:id", updateReasonsController);
router.post("/postreasons", postReasonsController);
router.delete("/deletereasons/:id", deleteReasonsController);

router.get("/childactivity", getChildrenActivityController);
router.patch("/updateactivity/:id", updateChildrenActivityController);
router.post("/postactivity", postChildrenActivityController);
router.delete("/deleteactivity/:id", deleteChildrenActivityController);

export default router;
