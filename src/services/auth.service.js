const { createUserDB, getUserByEmailDB, checkUserByPwdDB } = require('../repository/auth.repository')

async function createUser(name, surname, email, pwd) {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser.length) throw new Error(`такой есть `)
    await createUserDB(name, surname, email, pwd)
}

async function doAuthorisation(email, pwd) {
    const foundUser = await getUserByEmailDB(email)
    if (!foundUser.length) throw new Error(`нет такого мейла`)
    const user= await checkUserByPwdDB(pwd)
    if(!user) throw new Error('')
    
}

module.exports = { createUser, doAuthorisation }