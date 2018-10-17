import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Appbar } from 'muicss/react'
import { Provider } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Transactions from './modules/Transactions'
import Feed from './modules/Feed'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'

import './styles'

const IconBackButton = styled(FontAwesome)`
  display: block;
  font-size: 24px;
  position: relative;
  top: 20px;
  color: #fff;
  left: 10px;
  cursor: pointer;
  margin-right: 15px;
  padding-right: 10px;
  float: left;
`

class BackButton extends React.Component { // eslint-disable-line
  static contextTypes = {
    router: () => null
  }

  render () {
    let backButtonComponent = null
    if (this.context.router.history.location.pathname !== '/') {
      backButtonComponent = <IconBackButton onClick={() => this.context.router.history.goBack()} icon="arrow-left" name="arrow-left" />
    }
    return (
      <Appbar>{backButtonComponent}</Appbar>
    )
  }
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route><BackButton /></Route>
        <Route exact path="/" component={Transactions} />
        <Route path="/:transactionId" component={Feed} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
