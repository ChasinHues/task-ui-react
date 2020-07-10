import React from 'react'
import { ITask } from '../store/task/types'
import Task from './Task'
import { TaskListProps } from '../containers/VisibleTaskList'

const TaskList = (props: TaskListProps) => {
    return (
        <ul>
            {props.tasks.map((t: ITask) => {
                return <Task key={t.id} {...t} toggleTaskStatus={props.toggleTaskStatus} />
            })}
        </ul>
    )
}

export default TaskList