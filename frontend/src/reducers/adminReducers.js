import { 
    ADMIN_GET_ORDERS_FAIL, 
    ADMIN_GET_ORDERS_REQUEST, 
    ADMIN_GET_ORDERS_SUCCESS 
} from "../constants/adminConsts"

export const adminGetOrdersReducer = (state = {orders: []}, action) => {
    switch(action.type) {
        case ADMIN_GET_ORDERS_REQUEST:
            return {loading: true}
        case ADMIN_GET_ORDERS_SUCCESS:
            return {loading: false, orders: action.payload}
        case ADMIN_GET_ORDERS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }
}


export const adminSetHoursReducer = (state = {}, action) => {
    switch(action.type) {
        case ADMIN_GET_ORDERS_REQUEST:
            return {loading: true}
        case ADMIN_GET_ORDERS_SUCCESS:
            return {loading: false, success: true}
        case ADMIN_GET_ORDERS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }
}