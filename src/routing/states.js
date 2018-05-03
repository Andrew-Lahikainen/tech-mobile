import { Login } from '../auth/components'
import { Shell } from '../shell/components/Shell'
import { Api } from '../auth/api'
import { session } from '../redux/actions/session'
import { store } from '../redux/store'

/** registerStates :: Router -> Unit */
export const registerStates = router => {
  const states = [
    {
      name: 'login',
      url: '/login',
      component: Login
    },
    {
      name: 'shell',
      url: '/',
      component: Shell,
      resolve: {
        auth: () =>
          new Promise((resolve, reject) => {
            Api.isAuthenticated.fork(rej => {
              router.stateService.go('login')
              reject('Unauthorized')
            }, resolve)
          }),
        profile: () =>
          new Promise((resolve, reject) => {
            session.action
              .getProfile()(store.dispatch)
              .fork(reject, resolve)
          })
      }
    }
  ]

  states.forEach(s => router.stateRegistry.register(s))
}
