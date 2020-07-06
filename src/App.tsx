import React, {ChangeEvent} from 'react';
import './App.css';
import { ITodo } from './todos'

type IAppState = {
  tasks: ITodo[],
  newTask: string
}

class App extends React.Component<object, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasks: [],
      newTask: ''
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/tasks')
    .then(res => res.json())
    .then((data) => {
      this.setState({tasks: data})
    })
    .catch(console.log)
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({newTask: e.target.value})
  }

  handleKeyDown = (e: any) => {
    if(e.key === 'Enter') {
      this.handleClick()
    }
  }

  handleClick = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: this.state.newTask })
    }
    fetch('http://127.0.0.1:8080/tasks', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({
        tasks: [...this.state.tasks, data],
        newTask: ''
      }))
      .catch(console.log)
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1>Task list</h1>
        <ul>
          {tasks.map((task, index) => <li key={index}>{task.title}</li>)}
        </ul>
        <div>
          <input type="text" value={this.state.newTask} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    )
  }
}

export default App;
