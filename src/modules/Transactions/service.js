import { http } from '../../services/http'
import { mappers } from '../../service-mapper'

function getTransactions (page) {
  return http.get(`/transactions/${page}`).then(dataFeed => mappers.transactionsMapper.mapTransactions(dataFeed.data))
}

export const transactionsSrv = {
  getTransactions
}
