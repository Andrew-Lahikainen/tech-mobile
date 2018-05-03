import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'
import './assets/scss/index.scss'
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
