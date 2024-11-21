import React, { useState } from 'react'

function AddTask({addTask , deleteAll}) {
  const [ value , setValue ] = useState("")
  const [setTask] = useState([])

  const addItem = () => {
    if (value.trim() === "") return;
    addTask(value)
    setValue("")
  }

  return (
    <>
        <div className='input-container'>
            <input type='text' className='input' placeholder='Add a new Task'
              value={value}
              onChange={(eventObj) => {
                setValue(eventObj.target.value)
              }}
            />
            <button onClick={addItem} className='add-btn'>Add</button>
            <button onClick={deleteAll} className='delete-all-btn'>Delete All</button>
        </div>
    </>
  )
}

export default AddTask
