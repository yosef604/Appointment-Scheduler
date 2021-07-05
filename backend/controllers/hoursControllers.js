import Hour, { AvailableHours } from "../models/hoursModel.js"
import Order from "../models/orderModel.js"
import asyncHandler from 'express-async-handler'
import { timeSelection } from "../data/houresRender.js"


//@desc:   Get available hours for a specific date
//@route:  GET /api/hours/:date
//@access: Public
export const fetchHoursConroler = asyncHandler( async (req, res) => {

 const hoursAv = await AvailableHours.findOne({date: req.params.date})

    const availableHoursArr = []

   if (hoursAv){
        for (let i = 0; i < hoursAv.hoursAvailable.length; i++){
            availableHoursArr.push(hoursAv.hoursAvailable[i].hourName)
        }
   }

   const defaulHours = await Hour.find({})

    const hours = []
    for (let i = 0; i < defaulHours.length; i++){
        hours.push(defaulHours[i].hourName)
    }

    const orderByDate = await Order.find({date: req.params.date})

    const bookedHours = []
    for (let i = 0; i < orderByDate.length; i++){
        bookedHours.push(orderByDate[i].hour)
    }

    let hoursTime

    if (hoursAv){
        hoursTime = availableHoursArr.map(e => (
        bookedHours.indexOf(e) === -1 ? e = e : e = false ))
        console.log(hoursTime)
    } else {
        hoursTime = hours.map(e => (
        bookedHours.indexOf(e) === -1 ? e = e : e = false ))
    }
    

    res.send(hoursTime)
    
})


//@desc:   Set hours
//@route:  GET /api/admin/sethours
//@access: Admin
export const setHoursController = asyncHandler( async (req, res) => {
    const startHour = Number(req.body.startDay)
    const endHour = Number(req.body.endDay)
    const date = req.body.date

    const newHours = timeSelection(startHour, endHour)

    await AvailableHours.deleteOne({date: req.body.date})

    const hoursNew = await AvailableHours.create({date, hoursAvailable: newHours})


    res.send('success')
    
})