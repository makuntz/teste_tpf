const usuario = require('../model/Usuario')

exports.addUser = async (req, res) => {
    const {nome, email, curso} = req.body

    const usuariodb = await usuario.create({
        nome, 
        email, 
        curso
    })
    res.send(usuariodb)
}