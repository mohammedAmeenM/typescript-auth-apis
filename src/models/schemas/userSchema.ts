import mongoose from "mongoose";
import { UserSignupInterface } from '../interfaces/userSignupInterface';

const userSchema = new mongoose.Schema<UserSignupInterface>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema)
export default User;