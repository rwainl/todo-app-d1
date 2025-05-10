import React from 'react'
import { useState } from 'react'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {
  const [todoList, setTodoList] = useState([]);

  const addHandler = (item) => {
    setTodoList([...todoList, {item, done: false}]);
  }

  const statusHandler = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  }

  const deleteHandler = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  }

  return (
    <>
      <ToDoInput onAdd={addHandler}/>
      <ToDoList list={todoList} onStatus={statusHandler} onDelete={deleteHandler}/>
    </>
  )
}

export default App