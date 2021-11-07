import { Router } from 'express';
const router = Router()

import * as teacherCtrl from '../controllers/teachers.controller'
import {authJwt} from '../middlewares'


router.post('/', [authJwt.verifyToken,authJwt.isProfesror ],teacherCtrl.createTeachers);

router.get('/', teacherCtrl.getTeachers)

router.get('/name',teacherCtrl.getTeacherName)

router.get('/correo',teacherCtrl.getTeacherCorreo)

router.get('/:teacherId', teacherCtrl.getTeacherById)

router.put('/:teacherId',[authJwt.verifyToken,authJwt.isDirector],teacherCtrl.updateTeacherById)

router.delete('/:teacherId',[authJwt.verifyToken,authJwt.isDirector],teacherCtrl.deleteTeacherById)

export default router;