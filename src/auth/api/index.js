import { Http } from '../../io/http'
import { url } from '../../io/url'

export const Api = {
  passwordLogin: Http.post(url('api/v2/auth/member/password/login')),
  tokenLogin: Http.post(url('api/v2/auth/member/passwordless/login')),
  requestToken: Http.get(url('api/v2/auth/member/passwordless/token')),
  isAuthenticated: Http.get(url('api/v2/user/member'))
}
