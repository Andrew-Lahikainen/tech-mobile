import { reduce, merge, sequence } from 'ramda'
import Task from 'data.task'
import { Api } from './api'

export const Repo = {
  getProfile: sequence(Task.of, [Api.getProfile, Api.getSecuritySettings, Api.getMeta]).map(reduce(merge, {}))
}
