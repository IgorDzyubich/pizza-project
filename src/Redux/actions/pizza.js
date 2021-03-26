export const GET_PIZZA_LIST = 'GET_PIZZA_LIST'

export const getPizzaListActionCreator = (data) =>  {
    return { type: GET_PIZZA_LIST, payload: data }
}