import React, { Component } from 'react'
import { UIView } from '@uirouter/react'
import './Shell.scss'

export class Shell extends Component {
  constructor(p) {
    super(p)
    console.log(p)
  }

  render = _ => {
    return (
      <main className="shell__root">
        <header className="">Tech</header>
        <UIView />
      </main>
    )
  }
}
