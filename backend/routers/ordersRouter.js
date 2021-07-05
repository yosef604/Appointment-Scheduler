import express from 'express'
import { newOrderController } from '../controllers/ordersController.js'

const router = express.Router()

router.route('/neworder').post(newOrderController)

export default router