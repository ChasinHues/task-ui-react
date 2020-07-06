import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

const tasks = [
    { id: 1, title: "Take out the washing", done: false },
    { id: 2, title: "Have lunch", done: false },
    { id: 3, title: "Random task", done: true },
]

export default class TaskList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: tasks,
            selectedTask: null,
            newTask: ''
        }
    }

    handleStatusClick = (data: any) => {
        const updatedTasks = [...this.state.tasks]
        const matchedIndex = updatedTasks.findIndex((task: any) => task.id === data.id)
        updatedTasks[matchedIndex].done = !updatedTasks[matchedIndex].done
        this.setState({tasks: updatedTasks})
    }

    handleTaskSelect = (data: any) => {
        this.setState({selectedTask: data.id})
    }

    handleNewTaskChange = (e: any) => {
        this.setState({newTask: e.target.value})
    }

    handleNewTask = () => {
        const newTask = { 
            id: this.state.tasks.length + 1, 
            title: this.state.newTask, 
            done: false 
        }
        const updatedTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: updatedTasks,
            newTask: ''
        })
    }

    render() {
        const taskComponents = this.state.tasks.map((task: any) => (
            <Task key={task.id} task={task}
                statusClickHandler={this.handleStatusClick}
                taskSelectHandler={this.handleTaskSelect} />
        ))
        const selectedTaskText = <p>The selected task is: {this.state.selectedTask ?? "None"}</p>

        return (
            <div>
                <div className="divide-y divide-gray-400">
                    {taskComponents}
                </div>
                {selectedTaskText}
                <p>{this.state.newTask}</p>
                <NewTask value={this.state.newTask} changeHandler={this.handleNewTaskChange} addNewTaskHandler={this.handleNewTask} />
            </div>
        )
    }
}