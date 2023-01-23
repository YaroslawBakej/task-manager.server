import express, { Request, Response, NextFunction } from 'express'

import bodyParser from 'body-parser'
import user from './controller/user.controller'
import task from './controller/task.controller'
// import auth from './controller/auth.controller'

const app = express()

app.use((req:Request,res:Response,next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use(bodyParser.json())

app.use('/user', user)
app.use('/task', task)
// app.use('/api', auth)

app.use((error, req:Request,res:Response,next:NextFunction) => {
    res.status(500).send(error.message)
})

export default app


