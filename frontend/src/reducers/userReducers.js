import { 
    USER_BOOKING_FAIL,
    USER_BOOKING_REQUEST,
    USER_BOOKING_SUCCESS,
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT 
} from "../constants/userConsts"


export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state

    }
}


export const userBookingReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_BOOKING_REQUEST:
            return {loading: true}
        case USER_BOOKING_SUCCESS:
            return {loading: false, success: true}
        case USER_BOOKING_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }
}