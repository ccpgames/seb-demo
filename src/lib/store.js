import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'

import { posts } from '../containers/reducers'

const reduxLogger = createLogger()

const configureStore = () =>
  createStore(
    combineReducers({
      posts,
    }),
    {},
    compose(
      applyMiddleware(
        thunk,
        reduxLogger,
      ),
    ),
  )

export default configureStore()
