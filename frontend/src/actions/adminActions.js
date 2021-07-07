import axios from "axios"
import { 
  ADMIN_GET_ORDERS_FAIL, 
  ADMIN_GET_ORDERS_REQUEST, 
  ADMIN_GET_ORDERS_SUCCESS, 
  ADMIN_SET_HOURS_FAIL, 
  ADMIN_SET_HOURS_REQUEST,
  ADMIN_SET_HOURS_SUCCESS
} from "../constants/adminConsts"

export const adminGetOrdersAction = (token) => async (dispatch) => {

    try {
      dispatch({
        type: ADMIN_GET_ORDERS_REQUEST
      })
      
      const config = {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
        }
          
      const {data} = await axios.get('/api/admin/orders', config)

      dispatch({
        type: ADMIN_GET_ORDERS_SUCCESS,
        payload: data
      })

    } catch (error) {
         dispatch({
        type: ADMIN_GET_ORDERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}


export const adminSetHoursAction = (date, startDay, endDay, token) => async (dispatch) => {

    try {
      dispatch({
        type: ADMIN_SET_HOURS_REQUEST
      })
      
      const config = {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
        }
          
      await axios.post('/api/admin/sethours', {date, startDay, endDay}, config)

      dispatch({
        type: ADMIN_SET_HOURS_SUCCESS,
      })

    } catch (error) {
         dispatch({
        type: ADMIN_SET_HOURS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}
