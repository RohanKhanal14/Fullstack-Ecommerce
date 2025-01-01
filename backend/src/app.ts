import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorHandler } from "./middlewares/errorHandler.js";

connectDB();

const app = express();

app.use(express.json()); // sholuld be before all routes

app.use("/api/v1/user", userRoutes);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  try {
    console.log(
      `Server is running on port http://localhost:${process.env.PORT}`
    );
  } catch (error) {
    console.log(error);
  }
});
