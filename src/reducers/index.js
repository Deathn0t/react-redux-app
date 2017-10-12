import { combineReducers } from 'redux'
import sub_reducer from './sub-reducer.js'

const reducerApp = combineReducers({
  sub_reducer,
})

export default reducerApp
