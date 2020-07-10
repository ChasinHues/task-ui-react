import { FilterActionType, SET_FILTER, Filter } from './types'

export function setFilter(newFilter: string): FilterActionType {
    return {
        type: SET_FILTER,
        filter: newFilter
    }
}