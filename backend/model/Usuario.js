const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: [false, 'Por favor, digite seu nome'],
        maxLength: [30, 'O nome não pode exceder 30 caracteres']
    },
    email: {
        type: String,
        require: [true, 'Por favor digite o seu email'],
        unique: true
    },
    curso: {
        type: String,
        require: [false, 'Por favor digite o curso'],
    }

})




module.exports = mongoose.model('Usuario', usuarioSchema)