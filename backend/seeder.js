import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import {timeSelection} from './data/houresRender.js'
import {users} from './data/users.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import Hour, { AvailableHours } from './models/hoursModel.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Hour.deleteMany()
    await User.deleteMany()
    await AvailableHours.deleteMany()

    const hours = timeSelection(0, 24)

    await User.insertMany(users)
    await Hour.insertMany(hours)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Hour.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
