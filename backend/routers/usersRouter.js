import express from 'express'
import { authUserController } from '../controllers/usersControllers.js'

const router = express.Router()

router.route('/login').post(authUserController)

export default router