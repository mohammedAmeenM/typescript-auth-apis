import express,{ Express, Router } from "express";
import { createUser } from "../controllers/authController";
const authRoute:Router = express.Router();

authRoute.post('/',createUser)

export default authRoute


