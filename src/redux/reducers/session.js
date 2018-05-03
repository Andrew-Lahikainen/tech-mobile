import { compose, prop } from 'ramda'
import { session as sessionActions } from '../actions/session'

const initialState = {
  profile: {
    email: undefined,
    entityId: undefined,
    identifier: undefined,
    isActive: undefined,
    name: undefined,
    type: undefined,
    userId: undefined
  },
  settings: {
    enableBroadcasts: undefined,
    enableChat: undefined,
    enableNotifications: undefined,
    msp: undefined,
    psa: undefined
  },
  security: {
    name: undefined,
    boardIds: undefined,
    companyIds: undefined
  }
}

export const session = (state = initialState, action) => {
  switch (action.type) {
    case sessionActions.type.GetProfileSuccess: {
      return {
        ...state,
        ...toProfile(action.payload.res)
      }
    }
    default:
      return state
  }
}

const toProfile = res => ({
  profile: res.profile,
  settings: {
    enableBroadcasts: res.setting.enableBroadcast,
    enableChat: res.setting.enableChat,
    enableNotifications: res.setting.enableNotify,
    msp: res.setting.msp,
    psa: res.setting.psa.toLowerCase()
  },
  security: {
    name: compose(prop('name'), prop('ticket'))(res),
    boardIds: compose(prop('boardIds'), prop('ticket'))(res),
    companyIds: compose(prop('companyIds'), prop('ticket'))(res)
  }
})
