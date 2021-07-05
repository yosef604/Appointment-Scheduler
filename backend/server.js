import express from "express";
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import usersRouter from './routers/usersRouter.js'
import hoursRouter from './routers/hoursRouter.js'
import ordersRouter from './routers/ordersRouter.js'
import adminRouter from './routers/adminRouter.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/hours', hoursRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/admin', adminRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

