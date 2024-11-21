import React from 'react'
import { useState } from 'react';

function ListTasks({task , index , removeTask , editTask , saveTask}) {

  const [newTitle, setNewTitle] = useState(task.title);

  const handleSave = () => {
    saveTask(index, newTitle);
  };

  return (
    <>
      <div className='list-tasks'>
        {task.isEditing ? (
          <>
            <input
              type='text'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className='edit-input'
            />
            <button onClick={handleSave} className='save-btn'>Save</button>
          </>
        ) : (
          <>
            {task.title}
            <button onClick={() => editTask(index)} className='edit-btn'>Edit</button>
            <button onClick={() => removeTask(index)} className='delete-btn'>Delete</button>
          </>
        )}
      </div>
    </>
  )
}

export default ListTasks
