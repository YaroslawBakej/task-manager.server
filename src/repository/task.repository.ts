import { pool } from '../DB'
import {iTask} from '..//interfaces/interfaces'
async function createTaskDB(task, user_id) {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")
        const sql = 'insert into tasks (task,user_id) values ($1,$2) returning *'
        const data = (await client.query(sql, [task, user_id])).rows
        await client.query("COMMIT")
        return data
    } catch (error) {
        await client.query("ROLLBACK")
        console.log(error);
        return []
    }
}

async function getTasksDB(){
    const client = await pool.connect()
    const sql = "select * from tasks"
    const data = (await client.query(sql)).rows
    return data
}

async function getTaskByIdDB(id:number):Promise<iTask[]> {
    const client = await pool.connect()
    const sql = "select * from tasks where id=$1"
    const data = (await client.query(sql, [id])).rows
    return data
}

async function updateTaskDB(id:number, task:string, user_id:number):Promise<iTask[]> {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")
        const sql = 'update users set id=$1, task=$2, user_id=$3 returning *'
        const data = (await client.query(sql, [id, task, user_id])).rows
        await client.query("COMMIT")
        return data
    } catch (error) {
        await client.query("ROLLBACK")
        console.log(error);
        return []
    }
}

async function deleteTaskDB(id:number):Promise<iTask[]> {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")
        const sql = 'delete from tasks where id=$1'
        const data = (await client.query(sql, [id])).rows
        await client.query("COMMIT")
        return data
    } catch (error) {
        await client.query("ROLLBACK")
        console.log(error);
        return []
    }
}
async function patchTuskDB(id:number, dataClient):Promise<iTask[]> {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")
        const sql = 'select * from tasks where id=$1'
        const data = (await client.query(sql, [id])).rows[0]
        const merge = {...data, ...dataClient}
        const sql2='update tasks set id=$1, task=$2, user_id=$3 returning * '
        const data2=(await client.query(sql2, [merge.task, merge.user_id, id])).rows
        await client.query("COMMIT")
        return data2
    } catch (error) {
        await client.query("ROLLBACK")
        console.log(error);
        return []
    }
}
export { createTaskDB, getTasksDB, getTaskByIdDB, updateTaskDB, deleteTaskDB, patchTuskDB }