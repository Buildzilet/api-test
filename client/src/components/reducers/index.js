////ถังSTOTRE
import { combineReducers } from 'redux'
import { userReducer } from './userRuducer'

const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer