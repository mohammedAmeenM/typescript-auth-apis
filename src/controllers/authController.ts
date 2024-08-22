import { Request, response, Response } from "express";
import User from "../models/schemas/userSchema";
import { UserSignupInterface } from "../models/interfaces/userSignupInterface";
import bcrypt from 'bcrypt';
import generateToken from "../utils/generateToken";

const createUser = async (req: Request, res: Response) => {
  try {
    const data: UserSignupInterface = req.body;
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

const loginUser=async(req:Request,res:Response)=>{
  try {
    const data:UserSignupInterface=req.body;
    const user=await User.findOne({email:data.email});
    if(!user){
      return res.status(404).json({
        status:"failure",
        message:'Invalied User email'
      })
    };
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "failure",
        message: "Invalid password",
      });
    }
    const token = generateToken(user._id)
    res.status(200).json({
      status: "success",
      message: "Login successful",
      user,
      token
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Internal server error",
      error_message: "Unknown error",
    });
  }
}

export { createUser ,loginUser};
