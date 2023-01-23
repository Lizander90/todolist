import React from 'react'
import { useTaskListHook } from '../../customHooks/taskList/useTaskListHook';

const ListTask = ({ task, modifyTask, isEmptyTask, deleteTask, modificando, SetModify }) => {
    // const { task, setTask, insertTask, deleteTask, modifyTask, isEmptyTask } = useTaskListHook();

    const handleModifyAction = (idMod, e) => {
        modifyTask(idMod, e.target['textModificar-form'].value)
        SetModify('')
    }

    const handleModifyTask = (idMod) => {
        SetModify(idMod)
    }

    const handleDeleteTask = (id) => {
        deleteTask(id)
    }


    return (
        <div className='tasktListUI'>
            {
                !isEmptyTask() && task.map(taskElement => {
                    return <React.Fragment key={taskElement.id}>
                        {
                            <div className='itemList'>
                                {(modificando === taskElement.id)
                                    ?
                                    <form className='formModificar' onSubmit={(e) => handleModifyAction(taskElement.id, e)}>
                                        <input className='inputText textModif-List' name='textModificar-form' type='text' defaultValue={taskElement.actionTask} />
                                    </form>
                                    :
                                    <>
                                        <div className='itemList-task'>{taskElement.actionTask}</div>
                                        <input onClick={() => handleModifyTask(taskElement.id)} className='buttonList btnModif-List' name='btnModificar-form' type='button' value='modificar' />
                                        <input onClick={() => handleDeleteTask(taskElement.id)} className='buttonList btnDelete-List' name='btnDelete-form' type='button' value='Eliminar' />
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