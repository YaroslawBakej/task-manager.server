import express, { Request, Response} from 'express'
import { createTask, getTasks, getTaskById, updateTask, deleteTask, patchTusk } from '../services/task.service'
import { buildResponse } from '../helper/buildResponse'
import { handleError } from '../helper/handleError'
const route = express.Router()

route.get('/', async (req: Request,res:Response) => {
    try {
        const dataTask = await getTasks()
        buildResponse(res, 200, dataTask)
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.get('/:id', async (req: Request,res:Response) => {
    try {
        const { id } = req.params
        const dataTask = await getTaskById(id)
        buildResponse(res, 200, dataTask)
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.post('/', async (req: Request,res:Response) => {
    try {
        const { task, user_id } = req.body
        const dataTask = await createTask(task, user_id)
        buildResponse(res, 200, dataTask)
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.put('/:id', async (req: Request,res:Response)=>{
    try {
        const {id}=req.params
        const{task, user_id}=req.body
        const dataTask = await updateTask(id, task, user_id)
        buildResponse(res, 200, dataTask)
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.delete('/:id', async (req: Request,res:Response)=>{
    try {
        const {id}=req.params
        const dataTask = await deleteTask(id)
        buildResponse(res, 200, dataTask)
    } catch (error) {
        handleError(res, 404, error)
    }
})

route.patch('/:id', async (req: Request,res:Response)=>{
    try {
        const {id}=req.body
        const dataTask = await patchTusk(id, req.body)
        buildResponse(res, 200, dataTask)
    } catch (error) {
        handleError(res, 404, error)
    }
})
export default route

