import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import users from './auth/AuthReducers';
import medicine from './medicine/medicineReducers';

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    users,
    medicine
})

const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  )

export default store;

