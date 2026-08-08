import express from "express";

import {
  getGradeLevelController,
  getTuitionController,
  createGradeController,
  updateGradeController,
  deleteGradeController,
  createMethodController,
  updateMethodController,
  deleteMethodController,
  updateInstallmentController,
  deleteInstallmentController,
} from "../controllers/tuitionController.js";

const router = express.Router();

router.get("/getgradelevel", getGradeLevelController);
router.post("/creategrade", createGradeController);
router.patch("/patchgrade/:id", updateGradeController);
router.delete("/deletegrade/:id", deleteGradeController);

router.get("/gettuition/:id", getTuitionController);
router.post("/createmethod", createMethodController);
router.patch("/patchmethod/:id", updateMethodController);
router.delete("/deletemethod/:id", deleteMethodController);

router.patch(
  "/patchinstallment/:grade_id/:method_id",
  updateInstallmentController,
);
router.patch(
  "/removeinstallment/:grade_id/:method_id",
  deleteInstallmentController,
);

export default router;
