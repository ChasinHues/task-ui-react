export const SET_FILTER = 'SET_FILTER'

// Filter constants
export const Filter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_INCOMPLETE: 'SHOW_INCOMPLETE',
}

export interface IFilterAction {
    type: typeof SET_FILTER,
    filter: string
}

export interface FilterState {
    filter: string
}

export type FilterActionType = IFilterAction