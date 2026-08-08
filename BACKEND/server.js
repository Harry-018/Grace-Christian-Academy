import express from "express";
import dotenv from "dotenv";
import transpoRoutes from "./routes/transpoRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import tuitionRoutes from "./routes/tuitionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", transpoRoutes);
app.use("/api", homeRoutes);
app.use("/api", tuitionRoutes);
app.use("/api", authRoutes);
app.use("/api", applicationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
