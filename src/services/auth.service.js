const { createUserDB, getUserByEmailDB, checkUserByPwdDB } = require('../repository/auth.repository')

async function createUser(name, surname, email, pwd) {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser.length) throw new Error(`такой есть `)
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(pwd, salt);
    await createUserDB(name, surname, email, hashPassword)
}

async function doAuthorisation(email, pwd) {
    const foundUser = await getUserByEmailDB(email)
    if (!foundUser.length) throw new Error(`нет такого мейла`)
    const user= await checkUserByPwdDB(pwd,email)
    if(!user) throw new Error('')
    
}

module.exports = { createUser, doAuthorisation }