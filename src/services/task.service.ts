import {createTaskDB, getTasksDB, getTaskByIdDB, updateTaskDB, deleteTaskDB, patchTuskDB} from '../repository/task.repository'
import {ExceptionType}from '../helper/exceptions.type'
import {iTask} from '..//interfaces/interfaces'

async function createTask(task,user_id){
    const dataTasks=createTaskDB(task,user_id)
    if(!dataTasks) throw new Error(ExceptionType.GET_TASKS_NOT_FOUND.message)
    return dataTasks
}

async function getTasks():Promise<iTask[]>{
    const dataTask=getTasksDB()
    if(!dataTask) throw new Error(ExceptionType.GET_TASK_NOT_FOUND.message)
    return dataTask
}
async function getTaskById(id):Promise<iTask[]>{
    const dataTask=getTaskByIdDB(id)
    if(!dataTask) throw new Error(ExceptionType.GET_TASK_NOT_FOUND.message)
    return dataTask
}
async function updateTask(id, task, user_id):Promise<iTask[]>{
    const dataTask=updateTaskDB(id, task, user_id)
    if(!dataTask) throw new Error(ExceptionType.PUT_USER_TASK_FOUND.message)
    return dataTask
}
async function deleteTask(id):Promise<iTask[]>{
    const dataTask=deleteTaskDB(id)
    if(!dataTask) throw new Error(ExceptionType.DELETE_TASK_NOT_FOUND.message)
    return dataTask
}
async function patchTusk(id, dataClient):Promise<iTask[]>{
    const dataTask=patchTuskDB(id, dataClient)
    if(!dataTask) throw new Error(ExceptionType.PATCH_TASK_NOT_FOUND.message)
    return dataTask
}



export {createTask, getTasks, getTaskById, updateTask, deleteTask, patchTusk}