import axios from 'axios'
import { USER_BOOKING_FAIL, USER_BOOKING_REQUEST, USER_BOOKING_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConsts'

export const userLoginAction = (email, password) => async (dispatch) => {

    try {
      dispatch({
        type: USER_LOGIN_REQUEST
      })
      
      const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
          
      const {data} = await axios.post('/api/users/login', {email, password}, config)

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
      })

      localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
         dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}


export const userLogoutAction = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type: USER_LOGOUT})
  // dispatch({type: MY_ORDERS_RESET})
}

export const userBookingAction = (userInfo) => async (dispatch) => {

  try {
    dispatch({
      type: USER_BOOKING_REQUEST
    })
        
    await axios.post('/api/orders/neworder', userInfo)

    dispatch({
      type: USER_BOOKING_SUCCESS
    })

  } catch (error) {
       dispatch({
      type: USER_BOOKING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}