const express=require('express')
const {getUsers, getUsersById, updateUsers, deleteUsers}=require('../services/user.service')
const {isValidUser, isValidUserId}=require('../helper/validation')
const route= express.Router()


route.get('/', async(req,res) =>{
    try {
       const user = await getUsers()
       res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', isValidUserId, async(req,res) =>{
    try {
       const {id} = req.params
       const user = await getUsersById(id)
       res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', isValidUserId, async(req,res) =>{
    try {
       const {id} = req.params
       const {name,surname,email,pwd,status}=req.body
       const user = await updateUsers(id, name,surname,email,pwd,status)
       res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', isValidUserId, async(req,res) =>{
    try {
       const {id} = req.params 
       const user = await deleteUsers(id)
       res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports=route
