import { GET_ORDERS, ADD_ORDERS, DELETE_ORDERS } from '../actions/orders'

const initialState = {
    orders: []
}

const OrdersReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_ORDERS:
            return {
                state
            }
        case ADD_ORDERS:
            return { 
                ...state,
                orders: [...state.orders, {payload}]
            }
        case DELETE_ORDERS:
            return { 
                ...state,
                orders: [...state.orders.filter((el, index) => index !== payload)]
            }    
        default: {
            return state
        }
    }
}

export default OrdersReducer