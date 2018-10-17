import { GET_TRANSACTION_DATA } from './actionTypes'
import { feedSrv } from './service'

export const getFeedDataHandler = data => ({
  type: GET_TRANSACTION_DATA,
  payload: data
})

export function getFeedData (pageNumber) {
  return (dispatch) => {
    feedSrv.getFeedData(pageNumber)
      .then(response => dispatch(getFeedDataHandler(response)))
  }
}


export function setFeedData (data) {
  feedSrv.setFeedData(data)
}
