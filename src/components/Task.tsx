import React from 'react'

const Task = (props: any) => {
    const { id, title, done, toggleTaskStatus } = props

    const buttonStyles = done ? "bg-green-500" : "bg-white"
    const iconStyles = done ? "text-white" : "text-green-500"
    const taskTitleStyles = done ? "text-gray-400" : "text-gray-700"

    return (
        <div 
            className="task w-full flex items-center hover:bg-gray-200 cursor-pointer p-2"
            >
            <div className="">
                <button
                    className={`w-6 h-6 rounded-full mr-2 hover:bg-green-200 focus:outline-none border border-green-500 ${buttonStyles}`}
                    onClick={() => toggleTaskStatus(id)}
                    >
                    <i className={`fas fa-check text-sm ${iconStyles}`}></i>
                </button>
            </div>
            <div className={`${taskTitleStyles}`}>
                {title}
            </div>
        </div>
    )
}

export default Task