import { http } from '../../services/http'
import { mappers } from '../../service-mapper'

function getFeedData (number) {
  return http.get(`/transaction/${number}`).then(dataFeed => mappers.feedMapper.mapFeedData(dataFeed.data))
}

function setFeedData(data) {
  // here should be http.put(url) to the backend,
  // since i dont have api documentation i'll omit update now
  alert('not implemented due to the lack of the API documentation, check README please')
  return true
}

export const feedSrv = {
  getFeedData,
  setFeedData
}
