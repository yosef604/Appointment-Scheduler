import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
