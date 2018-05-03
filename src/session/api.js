import { Http } from '../io/http'
import { url } from '../io/url'

export const Api = {
  getProfile: Http.get(url('api/v2/tech/user')),
  getMeta: Http.get(url('api/v2/tech/meta')),
  getSecuritySettings: Http.get(url('api/v2/tech/security'))
}
