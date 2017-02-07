import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import photos from './photos'
import page from './page'

export default combineReducers({
  page,
  photos,
  routing: routerReducer
})