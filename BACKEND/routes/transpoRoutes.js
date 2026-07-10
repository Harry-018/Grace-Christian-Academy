import express from "express";

import {
  getLocationsController,
  updateLocationsController,
  postLocationsController,
  deleteLocationsController,
} from "../controllers/transpoController.js";

const router = express.Router();
router.get("/transpo", getLocationsController);
router.patch("/patchtranspo/:id", updateLocationsController);
router.post("/posttranspo", postLocationsController);
router.delete("/deletetranspo/:id", deleteLocationsController);

export default router;
