import { combineReducers } from 'redux'

import resourcesReducer from './resourcesReducer'
import addictionsReducer from './addictionsReducer'

export default combineReducers({
  resourcesReducer,
  addictionsReducer
})
