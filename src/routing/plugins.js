import { pushStateLocationPlugin, servicesPlugin } from '@uirouter/react'

export const registerPlugins = router => {
  const plugins = [pushStateLocationPlugin, servicesPlugin]
  plugins.forEach(p => router.plugin(p))
}
