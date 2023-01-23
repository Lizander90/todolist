import React from 'react'
import { useTaskListHook } from '../../customHooks/taskList/useTaskListHook'

const AddTask = ({ insertTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const nwTask = e.target['inputAddTask'].value;
        nwTask ? insertTask(nwTask)
            : alert('Escriba x favor')
    }

    return <>
        <form className='formAddList' onSubmit={handleSubmit}>
            <label>accion:
                <input type={'text'} placeholder='tarea' name='inputAddTask' className='inputText-formAddList' />
            </label>
            <input type={'submit'} value='Entrar' className='buttonAdd-formAddList' />
        </form>
    </>

}

export default AddTask

