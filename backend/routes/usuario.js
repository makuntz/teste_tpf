const express = require('express')
const router = express.Router()
const {addUser} = require('../controller/usuarioController')


router.post('/adduser', addUser)


module.exports = router