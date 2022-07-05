const Usuario = require('../model/Usuario')
const Admin = require('../model/Admin')
const catchglobal = require('../middleware/cacthglobal')
// const { use } = require('../routes/usuario') //que issoo??

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
    const {nome, email, curso} = req.body //aqui tb nao vai pegar pelo req.body - verificar
    
    await Usuario.findOneAndUpdate({email: email}, {nome, email, curso})

    
    res.send('Usuario atualizado')
})

exports.deleteUser = catchglobal(async (req, res) => {
    const {id} = req.params

    const usuariodb = await Usuario.findById(id)
    await usuariodb.remove()

    res.send('usuario deletado!')

})

exports.listUser = catchglobal(async (req, res) => {
    
    const usuariodb = await Usuario.find()

    res.send(usuariodb)
})

exports.login = catchglobal(async (req, res) => {
    const {email, password} = req.body
    const user = await Admin.findOne({email:email})

    if(user === null){
        alert('usuario nao existe')
    } else{
        if(email && password == user.email){
            res.redirect('')
        }
    }
})