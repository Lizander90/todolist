import React, { useState } from 'react'

const useTaskListHook = () => {

    // const [task, setTask] = useState([{ id: 1, actionTask: 'programar' }, { id: 2, actionTask: 'Estudiar' }]);
    const [task, setTask] = useState([]);
    const [modificando, SetModify] = useState('');


    const insertTask = (newTask) => {
        const nwTask = { id: crypto.randomUUID(), actionTask: newTask }
        setTask(prev => [...prev, nwTask]);
        console.log(task);
    }

    const deleteTask = (idTask = null) => {
        // console.log(delTask);
        const temp = task.filter((elementX) => elementX.id !== idTask)
        setTask(temp);
    }

    const modifyTask = (modTask, idTask = null) => {
        const temp = task.find((elementX) => elementX.id !== modTask.id)
        setTask(temp);
    }
    const isEmptyTask = () => {
        return task.length === 0
    }

    return { task, setTask, insertTask, deleteTask, modifyTask, isEmptyTask, modificando, SetModify }

}

export { useTaskListHook };