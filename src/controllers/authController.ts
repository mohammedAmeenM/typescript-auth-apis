import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/schemas/userSchema";
import { UserSignupInterface } from "../models/interfaces/userSignupInterface";

const createUser = async (req: Request, res: Response) => {
  try {
    const data: UserSignupInterface = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    const user = new User(data);
    await user.save();

    res.status(201).json({
      status: "success",
      message: "Successfully Created",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Internal server error",
      error_message: "Unknown error",
    });
  }
};

export { createUser };
