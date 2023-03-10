const { pool } = require('../DB')
const bcrypt =require('bcrypt')

async function getUserByEmailDB(email) {
    const client = await pool.connect()
    const sql = `select * from users where email=$1`
    const data = (await client.query(sql, [email])).rows
    return data
}

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = `insert into users(name, surname, email, pwd) 
        values($1, $2, $3, $4)`;
        await client.query(sql, [name, surname, email, pwd])
        await client.query('COMMIT')
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(error.message);
        return []
    }
}

async function checkUserByPwdDB(pwd,email) {
    const client = await pool.connect()
    const sql = `select pwd from users where email = $1`
    const data = (await client.query(sql,[email])).rows[0]
    return validPassword
}

module.exports = { getUserByEmailDB, createUserDB,checkUserByPwdDB, checkUserByPwdDB }

// not full
// commit