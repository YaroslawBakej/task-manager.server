const {getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB}=require('../repository/user.repository')

async function getUsers(){
    const users = await getUsersDB()
    if(!users.length) throw new Error("not found")
    return users
}

async function getUsersById(id){
    const users = await getUsersByIdDB(id)
    if(!users.length) throw new Error("not found")
    return users
}

async function updateUsers(id, name,surname,email,pwd,status){
    const users = await updateUsersDB(id, name,surname,email,pwd,status)
    if(!users.length) throw new Error("not found")
    return users
}

async function deleteUsers(id){
    const users = await deleteUsersDB(id)
    if(!users.length) throw new Error("not found")
    return users
}

module.exports={getUsers, getUsersById, updateUsers, deleteUsers}