import express from 'express'
import morgan from 'morgan';
const cors = require('cors')
import alumnosRouter from './routes/alumnos.routes'
import authRoutes from './routes/auth.routes'
import teachersRouter from './routes/teachers.routes'
import notasRouter from './routes/notas.routes'
import { createRoles } from './libs/initial.server';
import { createCursos } from './libs/create.Cursos';

const app = express();  
app.use(cors())
createRoles();
createCursos();
app.use(express.json());
app.use(morgan('dev'));
app.set('json spaces',2)
//app.use('/',(req,res)=>{res.json('Welcome')});
app.use('/api/alumnos',alumnosRouter);
app.use('/api/auth',authRoutes);
app.use('/api/teacher',teachersRouter);
app.use('/api/notas',notasRouter)


export default app;