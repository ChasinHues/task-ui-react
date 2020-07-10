import tasks from './task/reducers'
import filter from './filter/reducers'
import { combineReducers } from 'redux'

export default combineReducers({
    tasks,
    filter
})