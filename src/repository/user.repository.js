
const { pool } = require('../DB')

async function getUsersDB() {
    const client = await pool.connect()
    const sql = 'select * from users'
    const data = (await client.query(sql)).rows
    return data
}

async function getUsersByIdDB(id) {
    const client = await pool.connect()
    const sql = 'select * from users where id=$1'
    const data = (await client.query(sql, [id])).rows
    return data
}

async function updateUsersDB(id, name, surname, email, pwd, status) {
    const client = await pool.connect()
    try {
        client.query("BEGIN")
        const sql = 'update users set name =$1, surname=$2, email=$3, pwd=$4, status=$5 where id=$6 returning * '
        const data = (await client.query(sql, [name, surname, email, pwd, status, id])).rows
        client.query("COMMIT")
        return data
    } catch (error) {
        client.query("ROLLBACK")
        console.log(error.message);
        return []
    }
}

async function deleteUsersDB(id) {
    const client = await pool.connect()
    try {
        client.query("BEGIN")
        const sql = 'delete from users where id=$1 returning * '
        const data = (await client.query(sql, [id])).rows
        client.query("COMMIT")
        return data
    } catch (error) {
        client.query("ROLLBACK")
        console.log(error.message);
        return []
    }
}


module.exports = { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB }