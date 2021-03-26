export const GET_ORDERS = 'GET_ORDERS'
export const ADD_ORDERS = 'ADD_ORDERS'
export const DELETE_ORDERS = 'DELETE_ORDERS'

export const getOrdersActionCreator = () => {
    return { type: GET_ORDERS }
}

export const addOrdersActionCreator = (data) => {
    return { type: ADD_ORDERS, payload: data }
}

export const deleteOrdersActionCreator = (data) => {
    return { type: DELETE_ORDERS, payload: data }
}
