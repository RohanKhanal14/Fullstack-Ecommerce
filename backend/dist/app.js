import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.js";
const app = express();
app.use("/api/v1/user", userRoutes);
app.listen(process.env.PORT || 3000, () => {
    try {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    }
    catch (error) {
        console.log(error);
    }
});
