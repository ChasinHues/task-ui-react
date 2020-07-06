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
            <div className="fixed bottom-0 right-0 mr-5 border border-gray-500 border-b-0 rounded-t p-2 flex items-center">
                <input value={this.props.value} type="text" 
                    onChange={this.props.changeHandler} 
                    onKeyPress={this.handleAddNewTask}
                    className="border rounded p-1 " />
                <button 
                    onClick={this.props.addNewTaskHandler}
                    className="border p-1 ml-2 rounded-full w-6 h-6 flex items-center border-green-500 hover:bg-green-500 text-green-500 hover:text-white"
                    >
                        <i className="fas fa-plus pointer-events-none"></i>
                    </button>
            </div>
        )
    }
}