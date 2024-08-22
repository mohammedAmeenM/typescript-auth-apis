import express,{ Express } from "express";
import verifyToken from "../middlewares/verifyToken";
import { getLogUser } from "../controllers/usersController";

const userRoute =express.Router()

userRoute.get('/',verifyToken,getLogUser)

export default userRoute