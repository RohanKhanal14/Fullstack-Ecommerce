import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, role, _id, dob } = req.body;
    const user = await User.create({
      name,
      email,
      photo,
      gender,
      role,
      _id,
      dob,
    });

    res.status(201).json({
      status: "success",
      message: `Welcome ${user.name}`,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
