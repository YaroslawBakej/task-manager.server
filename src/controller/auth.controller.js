const express = require('express')

const route = express.Router()

route.post('/reg', async (res, req) => {
    try {
        const { name, surname, email, pwd } = req.body
        await createUser(name, surname, email, pwd)
        res.status(200).send(dataAuth)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
route.post('/auth', async (res, req) => {
    try {
        const { email, pwd } = req.body
        await doAuthorization(email, pwd)
        res.status(200).send(dataAuth)
    } catch (error) {
        res.status(404).send(error.message)
    }
})





module.exports = route