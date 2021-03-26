import { GET_STATISTICS } from '../actions/statistics'

const initialState = {
    popular: [],
    ingridients: []
}

const StatisticsReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_STATISTICS:
            return {
                ...state,
                popular: payload.popular,
                ingridients: payload.ingridients
            }
        default: {
            return state
        }
    }
}

export default StatisticsReducer