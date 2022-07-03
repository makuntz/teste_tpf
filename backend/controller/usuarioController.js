const Usuario = require('../model/Usuario')
const catchglobal = require('../middleware/cacthglobal')

exports.addUser = catchglobal (async (req, res) => {
    const {nome, email, curso} = req.body

    const usuariodb = await Usuario.create({
        nome, 
        email, 
        curso
    })
    res.send(usuariodb)
})

exports.editUser = catchglobal(async (req, res) => {
    const {nome, email, curso} = req.body
    
    const usuariodb = await Usuario.findOneAndUpdate({email: email}, {nome, curso})

    
    res.send('Usuario atualizado')
})

exports.deleteUser = catchglobal(async (req, res) => {
    const {email} = req.body

    const usuariodb = await Usuario.findOne({email:email})
    await usuariodb.remove()

    res.send('usuario deletado!')

})

exports.listUser = catchglobal(async (req, res) => {
    
    const usuariodb = await Usuario.find()

    res.send(usuariodb)
})