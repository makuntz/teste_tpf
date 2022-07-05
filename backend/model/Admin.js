const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const adminSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Por favor digite o seu email'],
    },
    senha: {
        type: Number,
        require: [true, 'Por favor digite sua senha'],
    }

})

//funcao para nao precisar colocar o bcrypt no controller;
// usuarioSchema.pre('save', async function(next){
//     if(!this.isModified('senha')){
//         next()
//     }

//     this.senha = await bcrypt.hash(this.senha, 10)
// })


module.exports = mongoose.model('Admin', adminSchema)