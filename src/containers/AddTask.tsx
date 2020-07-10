import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { createTask } from '../store/task/actions'

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createTask: (title: string) => {
            console.log(`Adding task: ${title}`)
            const newTask = {
                title: title
            }
            dispatch(createTask(newTask))
        }
    }
}

const AddTask = (props: PropsFromRedux) => {
    const { createTask } = props

    return (
        <div className="fixed bottom-0 border border-gray-500 border-b-0 rounded-t p-2 flex items-center">
            <form onSubmit={e => {
                e.preventDefault()
                const input = document.getElementById('new-task-input') as HTMLInputElement
                if(input.value.length) {
                    createTask(input.value)
                }
                input.value = ''
            }}>
                <input type="text" 
                    id="new-task-input"
                    className="border rounded p-1" />
                <button 
                    className="border p-1 ml-2 rounded-full w-6 h-6 flex items-center border-green-500 hover:bg-green-500 text-green-500 hover:text-white"
                    >
                        <i className="fas fa-plus  pointer-events-none"></i>
                </button>
            </form>
        </div>
    )
}

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(AddTask)