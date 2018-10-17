import axios from 'axios'

export class HttpError extends Error {
  constructor (message, { status = 500, statusText = 'Internal server error' } = {}) {
    super(message)
    this.status = status
    this.statusText = statusText
  }
}

const DEFAULT_HEADERS = {
}

/**
 * base http service
 */
export class Http {
  /**
   * Create base url and base query params will be used in the http requests
   * Base query params gets from browser url
   *
   * @param {String} host
   * @param {String} port
   * @param {String} suffix  - e.g. /api/v1
   */
  // constructor ({ host, port, suffix }) {
  constructor () {
    this.baseUrl = 'http://localhost:8080'
    this.code500 = 500
  }

  /**
   * Provide GET request using @superagent
   * @param {string} url
   * @param {object} params
   * @return {*}
   */
  get (url, params = {}, headers = {}) {
    return this.executeRequest({
      method: 'get',
      url,
      data: null,
      params,
      headers
    })
  }

  /**
   * POST method
   * Provide POST request using @superagent
   * @param {string} url
   * @param {object} data
   * @param {object} params
   * @return {*}
   */
  post (url, data = {}, params = {}, headers = {}) {
    // const formData = new FormData()

    // formData.append('action', 'ADD')
    // formData.append('param', 0)
    // formData.append('secondParam', 0)
    // formData.append('file', new Blob(['test payload'], { type: 'text/csv' }))


    return this.executeRequest({
      method: 'post',
      url,
      data,
      params,
      headers
    })
  }

  /**
   * PUT method
   * Provide PUT request using @superagent
   * @param {string} url
   * @param {object} data
   * @param {object} params
   * @return {*}
   */
  put (url, data = {}, params = {}, headers = {}) {
    return this.executeRequest({
      method: 'put',
      url,
      data,
      params,
      headers
    })
  }

  /**
   * DELETE method
   * Provide DELETE request using @superagent
   * @param {string} url
   * @param {object} data
   * @param {object} params
   * @return {*}
   */
  delete (url, params = {}, headers = {}) {
    return this.executeRequest({
      method: 'delete',
      url,
      data: null,
      params,
      headers
    })
  }

  /**
   * Parses response status codes
   * @param {object} err
   * @param {object} res
   * @return {*}
   */
  parseResponse (err, res) {
    let error
    return new Promise((resolve, reject) => {
      if (err && res) {
        const { status } = res
        if ([200].includes(status)) {
          return resolve(res.data)
        }

        // Transport layer error handler
        if (err.message) {
          error = new HttpError(err.message, { statusCode: this.code500 })
        }

        // Server error handler
        if (err.response) {
          const { response: { status, data } } = err // eslint-disable-line
          error = new HttpError(`${data || 'Unknown error'}`, { status })
        }
        return resolve(error)
      }
      return resolve(new HttpError(`ERR_${status}`, { status })) // eslint-disable-line
    })
  }

  successHandler = ({ data, status, statusText }) => {
    const meta = {
      status,
      statusText
    }

    return Promise.resolve({ data, meta })
  }

  failureHandler = (error) => {
    const errorResponse = error.response || error
    const { data = 'Unknown error', status, statusText } = errorResponse

    this.parseResponse(error, error.response)
    return Promise.resolve(new HttpError(data, { status, statusText }))
  }

  /**
   * get req url
   * @param {string} url
   * @return {String} full request url including host and port
   */
  getRequestUrl (url) {
    return this.baseUrl + url
  }

  /**
   * Common wrapper for requests: GET, POST, PUT, DELETE
   * It's available because @superagent has same call signatures for all of them.
   *
   * @param {string} method
   * @param {string} url
   * @param {object} data
   * @param {object} params
   * @return {*}
   */
  executeRequest ({
    method, url, data, params, headers
  }) {
    const request = {
      method,
      url: this.getRequestUrl(url),
      data,
      params,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers
      }
    }
    return axios(request)
      .then(this.successHandler)
      .catch(this.failureHandler)
  }
}

export const http = new Http()
