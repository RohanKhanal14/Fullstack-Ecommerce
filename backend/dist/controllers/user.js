import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        return next(new Error("Something went "));
        const { name, email, photo, gender, _id, dob } = req.body;
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob,
        });
        res.status(201).json({
            status: "success",
            message: `Welcome ${user.name}`,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};
