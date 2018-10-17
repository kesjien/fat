import { GET_TRANSACTIONS_DATA } from './actionTypes'
import { transactionsSrv } from './service'

export const getTransactionsDataHandler = transactions => ({
  type: GET_TRANSACTIONS_DATA,
  payload: transactions
})

export function getTransactions (pageNumber) {
  return (dispatch) => {
    transactionsSrv.getTransactions(pageNumber)
      .then(response => dispatch(getTransactionsDataHandler(response)))
  }
}
