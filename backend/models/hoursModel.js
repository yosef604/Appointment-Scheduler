import mongoose from 'mongoose'


const hoursSchema = mongoose.Schema(
  {
    hourName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

const Hour = mongoose.model('Hour', hoursSchema)


const availableHoursSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    hoursAvailable: [
      {
        hourName: {
          type: String,
          required: true,
        }
      }
    ]
  },
  { timestamps: true }
)

export const AvailableHours = mongoose.model('AvailableHours', availableHoursSchema)

export default Hour
