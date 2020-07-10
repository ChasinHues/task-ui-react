import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { Filter } from '../store/filter/types'
import { ITask } from '../store/task/types'
import { IAppState } from '../store/types'
import { toggleTaskStatus } from '../store/task/actions'
import TaskList from '../components/TaskList'


const getVisibleTasks = (tasks: ITask[], filter: string) => {
    switch(filter) {
        case Filter.SHOW_ALL:
            return tasks
        case Filter.SHOW_COMPLETED:
            return tasks.filter(t => t.done)
        case Filter.SHOW_INCOMPLETE:
            return tasks.filter(t => !t.done)
        default:
            return tasks
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        tasks: getVisibleTasks(state.tasks, state.filter)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggleTaskStatus: (id: number) => {
            console.log(`Task ${id} clicked`)
            dispatch(toggleTaskStatus(id))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const VisibleTaskList = connector(TaskList)

export type TaskListProps = ConnectedProps<typeof connector>

export default VisibleTaskList