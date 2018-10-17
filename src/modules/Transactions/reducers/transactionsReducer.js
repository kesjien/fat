import { GET_TRANSACTIONS_DATA } from '../actionTypes'

const initialState = {}

export function transactionsReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS_DATA: {
      const transactions = action.payload
      return { transactions }
    }
    default:
      return state
  }
}
