import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { feedReducer } from './modules/Feed/reducers'
import { transactionsReducer } from './modules/Transactions/reducers'


export default function configureStore (initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
      }) : compose

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  )

  return createStore(
    combineReducers({ transactionsReducer, feedReducer }),
    initialState,
    enhancer
  )
}
