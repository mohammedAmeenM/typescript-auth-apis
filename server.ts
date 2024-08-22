import dotenv from 'dotenv'
dotenv.config()
import app from './app'
import connectDb from './src/db/dbConnection'

connectDb()

app.listen(process.env.PORT,()=>{
    console.log("Listening on 4000");
    
})