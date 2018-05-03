import React, { Component } from 'react'
import { UIRouter, UIView } from '@uirouter/react'
import routing from './routing'
import './App.scss'

class App extends Component {
  render() {
    return (
      <UIRouter router={routing.router}>
        <UIView />
      </UIRouter>
    )
  }
}

export default App
