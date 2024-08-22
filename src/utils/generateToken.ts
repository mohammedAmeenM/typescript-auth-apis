import jwt from 'jsonwebtoken';
import authRoute from '../routes/authRoute';

const generateToken = (id:string |object)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'15d'})
}

export default generateToken;