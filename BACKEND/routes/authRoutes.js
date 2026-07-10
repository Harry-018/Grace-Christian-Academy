import express from "express";

import { getUserByEmailController } from "../controllers/authenticactionController.js";

const router = express.Router();

router.post("/authLogin", getUserByEmailController);

export default router;
