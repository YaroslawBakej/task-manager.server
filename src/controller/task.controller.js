const express = require('express')
const { createTask, getTasks, getTaskById, updateTask, deleteTask, patchTusk } = require('../services/task.service')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const dataTask = await getTasks()
        res.status(200).send(dataTask)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const dataTask = await getTaskById(id)
        res.status(200).send(dataTask)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { task, user_id } = req.body
        const dataTask = await createTask(task, user_id)
        res.status(200).send(dataTask)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async (req,res)=>{
    try {
        const {id}=req.params
        const{task, user_id}=req.body
        const dataTask = await updateTask(id, task, user_id)
        res.status(200).send(dataTask)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async (req,res)=>{
    try {
        const {id}=req.params
        const dataTask = await deleteTask(id)
        res.status(200).send(dataTask)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.patch('/:id', async (req,res)=>{
    try {
        const {id}=req.body
        const dataTask = await patchTusk(id, req.body)
        res.status(200).send(dataTask)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
module.exports = route

