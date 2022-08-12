import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  
  return  <div className='todolist'>
      <h1>TodoList</h1>
       {props.children}
    </div>
  
}

export default TodoList
