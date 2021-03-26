import { combineReducers, createStore } from 'redux';

import OrdersReducer from '../reducers/OrdersReducer';
import PizzaListReducer from '../reducers/PizzaListReducer';
import StatisticsReducer from '../reducers/StatisticsReducer';

let rootReducers = combineReducers({
    OrdersReducer,
    PizzaListReducer,
    StatisticsReducer
})

let store = createStore(rootReducers)

export default store;