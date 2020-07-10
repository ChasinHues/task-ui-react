import { Filter, FilterActionType, SET_FILTER } from './types'

export default (state = Filter.SHOW_ALL, action: FilterActionType) => {

    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }

}