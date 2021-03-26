export const GET_STATISTICS = 'GET_STATISTICS'

export const getStatisticsActionCreator = (data) => {
    return { type: GET_STATISTICS, payload: data }
}
