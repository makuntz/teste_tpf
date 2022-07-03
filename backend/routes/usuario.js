const express = require('express')
const router = express.Router()
const {addUser, editUser, deleteUser, listUser} = require('../controller/usuarioController')


router.post('/adduser', addUser)
router.put('/edituser', editUser)
router.delete('/deleteuser', deleteUser)
router.get('/listuser', listUser)

module.exports = router