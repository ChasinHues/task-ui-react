import React from 'react'


interface INewTaskProps {
    changeHandler: any,
    addNewTaskHandler: any,
    value: string | undefined
}

export default class NewTask extends React.Component<INewTaskProps, any> {
    constructor(props: any) {
        super(props)
    }

    handleAddNewTask = (e: any) => {
        if(e.key === 'Enter') {
            this.props.addNewTaskHandler()
        }
    }

    render() {
        return (
            <div className="fixed bottom-0 right-0 mr-5 border border-gray-500 border-b-0 rounded-t p-2">
                <input value={this.props.value} type="text" onChange={this.props.changeHandler} onKeyPress={this.handleAddNewTask} />
                <button onClick={this.props.addNewTaskHandler}>Add</button>
            </div>
        )
    }
}