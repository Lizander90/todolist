import React from 'react'
import { useTaskListHook } from '../../customHooks/taskList/useTaskListHook';

const ListTask = ({ task, modifyTask, isEmptyTask, deleteTask, modificando, SetModify }) => {
    // const { task, setTask, insertTask, deleteTask, modifyTask, isEmptyTask } = useTaskListHook();
    const handleToogleModify = (idMod) => {
        console.log(modificando)
        SetModify('')
    }

    const handleModifyTask = (idMod) => {
        SetModify(idMod)
        console.log(idMod)
    }

    const handleDeleteTask = (id) => {
        deleteTask(id)
        // console.log(e)
    }


    return (
        <div className='tasktListUI'>
            {
                !isEmptyTask() && task.map(taskElement => {
                    return <React.Fragment key={taskElement.id}>
                        {
                            <div >{taskElement.actionTask}
                                {(modificando === taskElement.id)
                                    ?
                                    <form className='formModificar' onSubmit={() => handleToogleModify(taskElement.id)}>
                                        <input className='textModif-List' name='textModificar-form' type='text' />
                                    </form>
                                    :
                                    <>
                                        <input onClick={() => handleModifyTask(taskElement.id)} className='btnModif-List' name='btnModificar-form' type='button' value='modificar' />
                                        <input onClick={() => handleDeleteTask(taskElement.id)} className='btnDelete-List' name='btnDelete-form' type='button' value='Eliminar' />
                                    </>
                                }

                            </div>
                        }
                    </React.Fragment>
                })
            }
        </div>
    )
}

export default ListTask