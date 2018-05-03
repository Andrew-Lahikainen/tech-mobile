import { Repo } from '../../../session/repository'
import * as types from './types'

const getProfileSuccess = res => {
  return {
    type: types.GetProfileSuccess,
    payload: {
      res
    }
  }
}

const getProfileFailure = err => {
  return {
    type: types.GetProfileFailure,
    payload: {
      err
    }
  }
}

export const getProfile = () => dispatch =>
  Repo.getProfile.cata({
    Rejected: err => (dispatch(getProfileFailure(err)), err),
    Resolved: res => (dispatch(getProfileSuccess(res)), res)
  })
