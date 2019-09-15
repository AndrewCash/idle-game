import { combineReducers } from 'redux'

import resourcesReducer from './resourcesReducer'
import purchasedAddictionsReducer from './purchasedAddictionsReducer'

export default combineReducers({
  resourcesReducer,
  purchasedAddictionsReducer
})
