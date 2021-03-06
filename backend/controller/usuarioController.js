const Usuario = require('../model/Usuario')
const Admin = require('../model/Admin')

exports.addUser = async (req, res) => {
    const {nome, email, curso} = req.body
    if(!email){
        res.send(false)
        return
    }

    const user = await Usuario.findOne({email:email})
    if(!!user){
        res.send(false)
        return
    }


    const usuariodb = await Usuario.create({
        nome, 
        email, 
        curso
    })
    res.send(usuariodb)
}

exports.editUser = async (req, res) => {
    const {id} = req.params
    const {nome, email, curso} = req.body 

    const usuariodb = await Usuario.findById(id)
    await usuariodb.updateOne({nome, email, curso})
    
    res.send('Usuario atualizado')
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params

    const usuariodb = await Usuario.findById(id)
    await usuariodb.remove()

    res.send('usuario deletado!')

}

exports.listUser = async (req, res) => {
    
    const usuariodb = await Usuario.find()
    
    res.send(usuariodb)
}

exports.login = async (req, res) => {
    const {email, password} = req.body
    const user = await Admin.findOne({email:email})

    if(!!user && password == user.senha){
        res.send(true)
    } else{
       console.log('Usuário nao é admin ou nao foi encontrado')
       res.send(false)
    }
}