import { Router } from 'express';
const router = Router()

import * as notasCtrl from '../controllers/notas.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken,authJwt.isProfesror ],notasCtrl.createNotas);

router.get('/',notasCtrl.getNotas);

router.delete('/:notasId', [authJwt.verifyToken,authJwt.isProfesror ],notasCtrl.deleteNotasById);

export default router;