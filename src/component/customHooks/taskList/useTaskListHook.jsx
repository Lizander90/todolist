import React, { useState } from 'react'

const useTaskListHook = () => {

    const [task, setTask] = useState([{ id: 1, actionTask: 'programar' }, { id: 2, actionTask: 'Estudiar' }, { id: 3, actionTask: 'millonario' }]);
    const [modificando, SetModify] = useState('');


    const insertTask = (newTask) => {
        const nwTask = { id: crypto.randomUUID(), actionTask: newTask }
        setTask(prev => [...prev, nwTask]);
    }

    const deleteTask = (idTask = null) => {
        const temp = task.filter((elementX) => elementX.id !== idTask)
        setTask(temp);
    }

    const modifyTask = (idTask, modTask) => {
        if (!modTask) {
            alert('Se eliminará el item debido a modificacion vacia')
            deleteTask(idTask)
        } else {
            const mod = { id: idTask, actionTask: modTask }
            const temp = task.find(elementX => elementX.id === idTask)
            temp.actionTask = modTask;
        }
    }

    const isEmptyTask = () => {
        return task.length === 0
    }
    return { task, setTask, insertTask, deleteTask, modifyTask, isEmptyTask, modificando, SetModify }
}

export { useTaskListHook };