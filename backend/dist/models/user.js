import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema(
  {
    // because we are using firebase so google auth has its own id
    _id: {
      type: String,
      required: [true, "User id is required"],
    },
    name: {
      type: String,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "User email is required"],
      validate: validator.default.isEmail,
    },
    photo: {
      type: String,
      required: [true, "User photo is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Gender is required"],
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
  },
  { timestamps: true }
);
schema.virtual("age").get(function () {
  const today = new Date();
  const dob = this.dob;
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});
export const User = mongoose.model("User", schema);
