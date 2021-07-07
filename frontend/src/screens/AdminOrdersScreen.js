import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { adminGetOrdersAction } from '../actions/adminActions'

const AdminOrdersScreen = ({ history }) => {
  const dispatch = useDispatch()

  const adminGetOrders = useSelector((state) => state.adminGetOrders)
  const { loading, error, orders } = adminGetOrders

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(adminGetOrdersAction(userInfo.token))
    } else {
      history.push('/')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE</th>
              <th>DATE</th>
              <th>DAY</th>
              {/* <th>PAID</th>
              <th>DELIVERED</th> */}
              <th>HOUR</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.date}</td>
                <td>{order.day}</td>
                <td>{order.hour}</td>
                {/* <td>${order.totalPrice}</td> */}
                {/* <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default AdminOrdersScreen
