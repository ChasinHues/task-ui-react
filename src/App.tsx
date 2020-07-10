import React from 'react';
import './App.css';
import VisibleTaskList from './containers/VisibleTaskList'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1 className="text-4xl font-bold">Task list</h1>
        <div>
          <VisibleTaskList />
        </div>
      </div>
    )
  }
}

export default App;
