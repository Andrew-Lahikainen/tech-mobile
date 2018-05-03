import { UIRouterReact } from '@uirouter/react'
import { registerPlugins } from './plugins'
import { registerStates } from './states'

export const router = new UIRouterReact()

registerPlugins(router)
registerStates(router)
