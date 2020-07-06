import React from 'react'
import { ITodo } from '../todos'
import './TodoListItem.css'

interface ITodoListItemProps {
    item: ITodo
}

export default class Task extends React.Component<ITodoListItemProps, object> {
    // name: string
    // isCompleted: boolean
    
    // constructor(props: any) {
    //     super(props)
    //     this.name = this.props.item.name
    //     this.isCompleted = this.props.item.isCompleted
    // }

    render() {
        return (
            // <li className={this.isCompleted ? 'completed' : ''}>{this.name}</li>
            <li>test</li>
        )
    }
}