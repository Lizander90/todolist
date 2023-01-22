import React from 'react'
import { useTaskListHook } from '../../customHooks/taskList/useTaskListHook'

const AddTask = ({insertTask}) => {
    // const { task, setTask, insertTask, deleteTask, modifyTask, isEmptyTask } = useTaskListHook();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target['inputAddTask'].value);
        insertTask(e.target['inputAddTask'].value)
        // alert(`Agregado ${e.target['inputAddTask'].value}`)
        // e.target['inputAddTask'].value = '';
        // console.log(e.target['inputAddTask'].value)

    }

    return <>
        <form className='formAddList' onSubmit={handleSubmit}>
            <label>accion:
                <input type={'text'} placeholder='tarea' name='inputAddTask' className='inputText-formAddList' />
            </label>
            <input type={'button'} value='Entrar' className='buttonAdd-formAddList' onClick={handleSubmit} />
        </form>
    </>

}

export default AddTask

