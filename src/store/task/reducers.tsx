import { 
    ITask,
    TaskActionType,
    CREATE_TASK,
    TOGGLE_TASK_STATUS
} from './types'

export default (state: ITask[] = [], action: TaskActionType): ITask[] => {

    switch (action.type) {
        case CREATE_TASK:
            return [
                ...state,
                {
                    ...action.task,
                    id: state.length + 1
                }
            ]
        case TOGGLE_TASK_STATUS:
            const updatedState = state.map(task => {
                if(task.id !== action.id) {
                    return task
                }
                return {
                    ...task,
                    done: !task.done
                }
            })
            return updatedState
        default:
            return state
    }

}