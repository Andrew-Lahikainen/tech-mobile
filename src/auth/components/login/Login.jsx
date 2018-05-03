import React, { Component } from 'react'
import { curry } from 'ramda'
import { Api } from '../../api'
import { router } from '../../../routing/router'

import './Login.scss'

const preventDefault = curry((f, e) => {
  e.preventDefault()
  f(e)
})

export class Login extends Component {
  constructor(p) {
    super(p)

    this.state = {
      user: {
        name: '',
        password: ''
      },
      rememberMe: true,
      isLoading: false,
      errMsg: ''
    }
  }

  setUsername = e => this.setState({ user: { ...this.state.user, name: e.target.value } })

  setPassword = e => this.setState({ user: { ...this.state.user, password: e.target.value } })

  login = preventDefault(e => {
    this.setState({ ...this.state, isLoading: true, errMsg: '' })

    Api.passwordLogin({
      userName: this.state.user.name,
      password: this.state.user.password,
      rememberMe: this.state.rememberMe
    }).fork(
      rej => this.setState({ ...this.state, isLoading: false, errMsg: rej.responseStatus.message }),
      res => router.stateService.go('shell')
    )
  })

  isInvalid = () => !this.state.user.name || !this.state.user.password

  render() {
    return (
      <form className="login__form">
        <label className="body-2">
          Username
          <input className="input" type="text" value={this.state.user.name} onChange={this.setUsername} />
        </label>
        <label className="body-2">
          Password
          <input className="input" type="password" value={this.state.user.password} onChange={this.setPassword} />
        </label>
        <p className="caption">{this.state.errMsg}</p>
        <button className="btn-raised primary" disabled={this.isInvalid() || this.state.isLoading} onClick={this.login}>
          Login
        </button>
        <p>{this.state.res}</p>
      </form>
    )
  }
}
