import React from 'react';
import './App.css';

import TaskList from './components/TaskList'

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-4xl font-bold">Task list</h1>
        <div>
          <TaskList />
        </div>
      </div>
    )
  }
}

export default App;
