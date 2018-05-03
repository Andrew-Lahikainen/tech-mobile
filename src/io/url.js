import { compose, map, join, prepend } from 'ramda'

/** toQueryString :: Record String -> String */
export const toQueryString = record =>
  compose(prepend('?'), join('&'), map(k => `${k}=${record[k]}`), Object.keys)(record)

export const url = path => {
  const host = 'lancomdev.deskdirector.com'
  return `https://${host}/${path}`
}
