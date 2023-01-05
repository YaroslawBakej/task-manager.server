const express = require('express')
const bodyParser = require('body-parser')
const user  = require('./controller/user.controller')
const task= require('./controller/task.controller')
const auth= require('./controller/auth.controller')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use(bodyParser.json())

app.use('/user', user)
app.use('/task', task)
app.use('/api', auth)

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app