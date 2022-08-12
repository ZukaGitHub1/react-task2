import React, { Children } from 'react'
import Todo from './components/Todo';
import "./App.css"
import TodoList from './components/TodoList';


function App() {
  return <div className="App">
     <TodoList props={Children}>
    <Todo  title="Learn React" isDone={true} />
    <Todo  title="Learn Node" isDone={false}/>
    <Todo  title="Cry because as a developer i don't have a life)" isDone={true}/>
    </TodoList> 
    </div>
  
}

export default App;
