import express, { Request, Response } from 'express'

import {getUsers, getUsersById, updateUsers, deleteUsers} from '../services/user.service'
import {isValidUser, isValidUserId} from '../helper/validation'
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError'
const route= express.Router()


route.get('/', async(req: Request,res:Response) =>{
    try {
       const user = await getUsers()
       buildResponse(res, 200, user);
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.get('/:id', isValidUserId, async(req: Request,res:Response) =>{
    try {
       const {id} = req.params
       const user = await getUsersById(id)
       buildResponse(res, 200, user);
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.put('/:id', isValidUserId, isValidUser, async(req: Request,res:Response) =>{
    try {
       const {id} = req.params
       const {name,surname,email,pwd,status}=req.body
       const user = await updateUsers(id, name,surname,email,pwd,status)
       buildResponse(res, 200, user);
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.delete('/:id', isValidUserId, async(req: Request,res:Response) =>{
    try {
       const {id} = req.params 
       const user = await deleteUsers(id)
       buildResponse(res, 200, user);
    } catch (error) {
        handleError(res, 404, error)
    }
})

export default route
