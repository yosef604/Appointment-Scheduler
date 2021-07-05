import Order from "../models/orderModel.js"
import asyncHandler from 'express-async-handler'


//@desc:   Creat new order
//@route:  POST /api/orders/neworder
//@access: Public
export const newOrderController = asyncHandler( async (req, res) => {
    await new Order (req.body).save()
    res.send({message: 'success'})
})


//@desc:   Get all orders
//@route:  GET /api/admin/orders
//@access: Admin
export const getAllOrdersController = asyncHandler( async (req, res) => {
    const orders = await Order.find({})
    if (orders){
        res.send(orders)
    } else {
        res.status(404)
        throw new Error('No Orders')
    }
})