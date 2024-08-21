import dotenv from 'dotenv'
dotenv.config()
import app from './app'
import connectDb from './src/db/dbConnection'

connectDb()

app.listen(4000,()=>{
    console.log("Listening on 4000");
    
})