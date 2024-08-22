import User from "../models/schemas/userSchema";
import { CustomRequest } from '../middlewares/verifyToken';
import { Response } from "express";

const getLogUser = async(req:CustomRequest,res:Response)=>{
    try {
        const user = await User.findOne({_id:req.userId});
        if(!user){
            return res.status(404).json({
                status:'failure',
                message:'user not found'
            })
        };
        res.status(200).json({
            status:'success',
            message:'Successfully get User',
            user
        })
    } catch (error) {
        res.status(500).json({
            status: "failure",
            message: "Internal server error",
            error_message: "Unknown error",
          });
    }
}
export {getLogUser}