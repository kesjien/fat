import { GET_TRANSACTION_DATA } from '../actionTypes'

const initialState = {}

export function feedReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION_DATA: {
      const transaction = action.payload
      return { feed: transaction }
    }
    default:
      return state
  }
}
