import jwt from 'jsonwebtoken';

const generateToken = (id:string |object)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'15d'})
}

export default generateToken;