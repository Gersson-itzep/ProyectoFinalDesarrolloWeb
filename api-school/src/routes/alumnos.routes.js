import { Router } from 'express';
const router = Router()

import * as alumnosCtrl from '../controllers/alumnos.controller'
import {authJwt} from '../middlewares'


router.post('/', [authJwt.verifyToken,authJwt.isProfesror ],alumnosCtrl.createAlumnos);

router.get('/', alumnosCtrl.getAlumnos)

router.get('/name',alumnosCtrl.getAlumnosName)

router.get('/correo',alumnosCtrl.getAlumnosCorreo)

router.get('/:alumnosId', alumnosCtrl.getAlumnosById)

router.put('/:alumnosId', authJwt.verifyToken,alumnosCtrl.updateAlumnosById)

router.delete('/:alumnosId',[authJwt.verifyToken,authJwt.isProfesror],alumnosCtrl.deleteAlumnosById)


export default router;