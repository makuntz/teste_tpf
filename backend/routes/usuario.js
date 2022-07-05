const express = require('express')
const router = express.Router()
const {addUser, editUser, deleteUser, listUser, login} = require('../controller/usuarioController')


router.post('/adduser', addUser)
router.put('/edituser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser)
router.get('/listuser', listUser)
router.post('/login', login)

module.exports = router