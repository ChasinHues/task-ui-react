export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS'
export const CREATE_TASK = 'CREATE_TASK'

export interface IToggleTaskStatusAction { 
    type: typeof TOGGLE_TASK_STATUS,
    id: number
}

export interface INewTask {
    title: string,
    description?: string,
    done?: boolean
}

export interface ITask extends INewTask {
    id: number
}

export interface ICreateTaskAction {
    type: typeof CREATE_TASK,
    task: INewTask
}

export type TaskActionType = IToggleTaskStatusAction | ICreateTaskAction