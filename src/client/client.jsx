import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import reducers from '../shared/reducers'
import routes from '../shared/components/routes'

import '../../node_modules/primer-css/css/primer.css'

const history = createBrowserHistory()
const createStoreWithMiddleware = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)
const store = createStoreWithMiddleware(reducers, window.__DATA__)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} children={routes}/>
    </Provider>,
    document.getElementById('app')
  )

  ReactDOM.render(
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>,
    document.getElementById('devtools')
  )
})
