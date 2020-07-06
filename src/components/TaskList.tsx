import React, { ChangeEvent } from 'react'
import Task from './Task'
import TODOS, { ITodo } from '../todos'

interface ITodoListState {
    todos: ITodo[]
    newTodo: string
}

export default class TaskList extends React.Component<object, ITodoListState> {
    constructor(props: any) {
        super(props)
        this.state = {
            todos: TODOS,
            newTodo: ''
        }
    }

    // renderTodos() {
    //     return this.state.todos.map(todo => {
    //         return <Task key={todo.id} item={todo} />
    //     })
    // }

    // handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({newTodo: e.target.value})
    // }

    // handleClick = () => {
    //     let newTodo: ITodo = {
    //         id: this.state.todos.length + 1,
    //         name: this.state.newTodo,
    //         isCompleted: false
    //     }
    //     let newTodos = [...this.state.todos, newTodo]
    //     this.setState({
    //         todos: newTodos,
    //         newTodo: ''
    //     })
    // }

    // handleKeyDown = (e: any) => {
    //     if(e.key === 'Enter') {
    //         this.handleClick()
    //     }
    // }

    render() {
        return (
            <div>
                <ul>
                    {/* {this.renderTodos()} */}
                </ul>
                <div>
                    {/* <input type="text" placeholder="Add new todo item" 
                        value={this.state.newTodo} 
                        onChange={this.handleChange} 
                        onKeyDown={this.handleKeyDown} /> */}
                    {/* <button onClick={this.handleClick}>Add</button> */}
                </div>
            </div>
        )
    }
}