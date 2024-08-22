import { NextFunction, Request, Response } from "express";
import jwt, { decode } from "jsonwebtoken";

export interface CustomRequest extends Request {
    userId?: string;
  }

const verifyToken=(req:CustomRequest,res:Response,next:NextFunction)=>{
    const token=req.headers["authorization"] as string
    if(!token){
        return res.status(403).json({
            status:"failure",
            message:"No Token Provided"
        })
    };
    jwt.verify(token,process.env.JWT_SECRET as string,(err,decode)=>{
        if(err){
            return res.status(500).json({
                status: "failure",
                message: "Failed to authenticate token",
              });
        }
        req.userId=(decode as {id:string}).id;
        next();
    })
}
export default verifyToken;