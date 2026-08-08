import express from "express";
import { applyApplicationController } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/apply", applyApplicationController);

export default router;
