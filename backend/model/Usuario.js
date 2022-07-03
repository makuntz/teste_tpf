const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Por favor, digite seu nome'],
        maxLength: [30, 'O nome não pode exceder 30 caracteres']
    },
    email: {
        type: String,
        require: [true, 'Por favor digite o seu email'],
        unique: true,
    },
    curso: {
        type: String,
        require: [true, 'Por favor digite o curso'],
    }

})


usuarioSchema.pre('save', async function(next){
    if(!this.isModified('senha')){
        next()
    }

    this.senha = await bcrypt.hash(this.senha, 10)
})


module.exports = mongoose.model('Usuario', usuarioSchema)