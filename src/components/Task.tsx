import React from 'react'

function Task(props: any) {
    const handleStatusClick = (e: any) => {
        e.stopPropagation()
        props.statusClickHandler(props.task)
        console.log('Task.tsx: handleStatusClick')
    }
    const handleTaskSelect = () => {
        props.taskSelectHandler(props.task)
        console.log('Task.tsx: handleTaskSelect')
    }
    const buttonStyles = props.task.done ? "bg-green-500" : "bg-white"
    const iconStyles = props.task.done ? "text-white" : "text-green-500"
    const taskTitleStyles = props.task.done ? "text-gray-400" : "text-gray-700"

    return (
        <div 
            className="task w-full flex items-center hover:bg-gray-200 cursor-pointer p-2"
            onClick={handleTaskSelect}
            >
            <div className="">
                <button
                    className={`w-6 h-6 rounded-full mr-2 hover:bg-green-200 focus:outline-none border border-green-500 ${buttonStyles}`}
                    onClick={handleStatusClick}
                    >
                    <i className={`fas fa-check text-sm ${iconStyles}`}></i>
                </button>
            </div>
            <div className={`${taskTitleStyles}`}>
                {props.task.title}
            </div>
        </div>
    )
}

export default Task