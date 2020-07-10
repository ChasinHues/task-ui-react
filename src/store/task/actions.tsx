import { 
    TaskActionType, 
    TOGGLE_TASK_STATUS,
    CREATE_TASK,
    INewTask 
} from './types'

export function toggleTaskStatus(id: number): TaskActionType {
    return {
        type: TOGGLE_TASK_STATUS,
        id: id
    }
}

export function createTask(task: INewTask): TaskActionType {
    return {
        type: CREATE_TASK,
        task: { ...task, done: false }
    }
}