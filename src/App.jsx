import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useTaskListHook } from './component/customHooks/taskList/useTaskListHook'
import AddTask from './component/ui/AddTask';
import ListTask from './component/ui/ListTask';
import { useEffect } from 'react';


function App() {
  const { task, setTask, insertTask, deleteTask, modifyTask, isEmptyTask, modificando, SetModify } = useTaskListHook();

  return (
    <>
      <AddTask insertTask={insertTask} />
      <hr />
      
      <ListTask
        modificando={modificando}
        SetModify={SetModify}
        task={task}
        isEmptyTask={isEmptyTask}
        deleteTask={deleteTask}
        modifyTask={modifyTask}
      />

      

    </>
  )
}

export default App
