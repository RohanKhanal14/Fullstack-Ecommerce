import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log(`MongoDB connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log("DB connection faild", error);
  }
};
