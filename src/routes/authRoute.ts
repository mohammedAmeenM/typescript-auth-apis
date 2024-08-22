import express,{ Express, Router } from "express";
import { createUser, loginUser } from "../controllers/authController";
const authRoute:Router = express.Router();

authRoute.post('/register',createUser)
.post('/login',loginUser)
export default authRoute


