import express from "express";

import {
  getGradeLevelController,
  getTuitionController,
  createGradeController,
  updateGradeController,
  deleteGradeController,
  createMethodController,
} from "../controllers/tuitionController.js";

const router = express.Router();

router.get("/getgradelevel", getGradeLevelController);
router.post("/creategrade", createGradeController);
router.patch("/patchgrade/:id", updateGradeController);
router.delete("/deletegrade/:id", deleteGradeController);

router.get("/gettuition/:id", getTuitionController);
router.post("/createmethod", createMethodController);

export default router;
