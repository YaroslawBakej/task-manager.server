import {ExceptionType} from './exceptions.type'
import { Request, Response, NextFunction } from 'express'
function isValidUserId(req:Request,res:Response,next:NextFunction){
    const{id}=req.params
    if (!id) throw new Error(ExceptionType.USER_ID_INVALID.message)
    next()
}

function isValidUser(req:Request,res:Response,next:NextFunction){
const {name, surname, email, pwd, status}=req.body
if(!name)throw new Error(ExceptionType.USER_ID_INVALID.message)
if(!surname)throw new Error(ExceptionType.USER_ID_INVALID.message)
if(!/^[0-9a-z]+\.[0-9a-z]+@[a-z]+\.[a-z]{1,3}$/g.test(email))throw new Error(ExceptionType.USER_ID_INVALID.message)
next()
}

export {isValidUser, isValidUserId}