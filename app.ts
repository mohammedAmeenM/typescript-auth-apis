import exp,{Express, Router} from 'express';
import authRoute from './src/routes/authRoute';
import morgan from 'morgan';
import userRoute from './src/routes/userRoutes';

const app:Express =exp()
app.use(exp.json())

app.use(morgan('dev'))

app.use('/api/auth/',authRoute)
app.use('/api/users/',userRoute)



export default app

