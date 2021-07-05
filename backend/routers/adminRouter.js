import express from 'express'
import {admin} from '../middlewares/authMiddleware.js'
import { getAllOrdersController } from '../controllers/ordersController.js'
import { setHoursController } from '../controllers/hoursControllers.js'

const router = express.Router()

router.route('/orders').get(admin, getAllOrdersController)
router.route('/sethours').post(admin, setHoursController)

export default router