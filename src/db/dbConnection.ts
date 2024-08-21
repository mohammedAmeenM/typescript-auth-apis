import mongoose from "mongoose";

const connectDb =async()=>{
    const db:string =process.env.DB_URL
    try {
        await mongoose.connect(db,{dbName:'user'})
        console.log('Db connected sucessfully')
    } catch (error) {
        console.log('error coonecting db',error)
    }
}
export default connectDb