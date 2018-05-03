import { curry } from 'ramda'
import Task from 'data.task'

const defaultReq = {
  mode: 'cors',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Accept-Charset': 'utf-8'
  }
}

export const Http = {
  /** request :: Url -> RequestInit -> Task (Error, a) */
  request: curry(
    (url, req) =>
      new Task((rej, res) => {
        fetch(url, req)
          .then(r => {
            if (r.ok) {
              return r
            } else {
              throw r
            }
          })
          .then(r => r.json())
          .then(res)
          .catch(rej)
      })
  ),

  /** get :: Url -> Task (Error, a) */
  get: url => Http.request(url, { ...defaultReq, method: 'get' }),

  /** post :: Url -> a -> Task (Error, b) */
  post: curry((url, data) =>
    Http.request(url, {
      ...defaultReq,
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        ...defaultReq.headers,
        'Content-Type': 'application/json'
      }
    })
  )
}
