import express from 'express'
import { fetchHoursConroler } from '../controllers/hoursControllers.js'

const router = express.Router()

router.route('/:date').get(fetchHoursConroler)

export default router