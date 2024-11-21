import React, { useEffect, useState } from 'react'
import "./ToDo.css"
import AddTask from './AddTask'
import ListTasks from './ListTasks'

const ToDo = () => {
  const [ tasks , setTask ] = useState([]);

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`
  })

  const addTask = (title) => {
    if (title.trim() === "") {
      return;
    }
  
    const newTask = [...tasks, { title, isEditing: false }];
    setTask(newTask);
  };
  

  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTask(newTask)
  }

  const editTask = (index) =>{
    const newTasks = tasks.map((task,i) => {
      return i === index ? {...tasks, isEditing:!task.isEditing} : task
    })
    setTask(newTasks)
  }

  const saveTask = (index, newTitle) =>{
    if(newTitle.trim() === ""){
      return ;
    }
    const newTasks = tasks.map((task,i) => {
      return i === index ? { title: newTitle, isEditing: false } : task
    })
    setTask(newTasks)
  }

  const deleteAll = () =>{
    setTask([])
  }


  return (
    <>
        <div className='ToDo-container'>
            <div className='header'>TO-DO APP</div>
            <div className='Add-Task'>
                <AddTask addTask = { addTask }
                deleteAll = {deleteAll}
                />
            </div>
            <div className='tasks'>
              {tasks.map((task,index) => (
                <ListTasks task = {task} 
                editTask = {editTask}
                saveTask={saveTask}
                removeTask = {removeTask} 
                index = {index} 
                key={index}/>
              ))}
            </div>
        </div>
    </>
  )
}

export default ToDo
