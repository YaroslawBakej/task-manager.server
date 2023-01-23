import { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB } from '../repository/user.repository'
import { iUser } from '..//interfaces/interfaces'

async function getUsers() {
    const users = await getUsersDB()
    if (!users.length) throw new Error("not found")
    return users
}

async function getUsersById(id: number): Promise<iUser[]> {
    const users = await getUsersByIdDB(id)
    if (!users.length) throw new Error("not found")
    return users
}

async function updateUsers(id: number, name: string, surname: string, email: string, pwd: string, status: number): Promise<iUser[]> {
    const users = await updateUsersDB(id, name, surname, email, pwd, status)
    if (!users.length) throw new Error("not found")
    return users
}

async function deleteUsers(id: number): Promise<iUser[]> {
    const users = await deleteUsersDB(id)
    if (!users.length) throw new Error("not found")
    return users
}

export { getUsers, getUsersById, updateUsers, deleteUsers }