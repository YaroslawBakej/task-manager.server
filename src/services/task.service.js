const {createTaskDB, getTasksDB, getTaskByIdDB, updateTaskDB, deleteTaskDB, patchTuskDB}=require('../repository/task.repository')
const {ExceptionType}=require('../helper/exceptions.type')


async function createTask(task,user_id){
    const dataTasks=createTaskDB(task,user_id)
    if(!dataTasks) throw new Error(ExceptionType.GET_TASKS_NOT_FOUND.message)
    return dataTask
}

async function getTasks(){
    const dataTask=getTasksDB()
    if(!dataTask) throw new Error(ExceptionType.GET_TASK_NOT_FOUND.message)
    return dataTask
}
async function getTaskById(id){
    const dataTask=getTaskByIdDB(id)
    if(!dataTask) throw new Error(ExceptionType.GET_TASK_NOT_FOUND.message)
    return dataTask
}
async function updateTask(id, task, user_id){
    const dataTask=updateTaskDB(id, task, user_id)
    if(!dataTask) throw new Error(ExceptionType.PUT_USER_TASK_FOUND.message)
    return dataTask
}
async function deleteTask(id){
    const dataTask=deleteTaskDB(id)
    if(!dataTask) throw new Error(УxceptionType.DELETE_TASK_NOT_FOUND.message)
    return dataTask
}
async function patchTusk(id, dataClient){
    const dataTask=patchTuskDB(id, dataClient)
    if(!dataTask) throw new Error(ExceptionType.PATCH_TASK_NOT_FOUND.message)
    return dataTask
}



module.exports={createTask, getTasks, getTaskById, updateTask, deleteTask, patchTusk}