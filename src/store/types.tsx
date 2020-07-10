import { ITask } from './task/types'

export interface IAppState {
    tasks: ITask[],
    filter: string
}