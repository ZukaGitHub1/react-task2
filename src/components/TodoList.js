import React from 'react'


const TodoList = (props) => {
  
  return  <div className='todolist'>
      <h1>TodoList</h1>
       {props.children}
    </div>
  
}

export default TodoList
