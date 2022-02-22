import { Router } from 'express'
import { authController } from '../controllers/auth.controller.js'

const router = Router()

router.get('/hello', authController.hello)

export default router
