import exp,{Express, Router} from 'express';
import authRoute from './src/routes/authRoute';

const app:Express =exp()
app.use(exp.json())

app.use('/api/auth/',authRoute)



export default app

