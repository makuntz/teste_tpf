const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";

const conectDatabase = () => {
    mongoose.connect(uri, {
        useUnifiedTopology: true
        
    }).then(con => {
        console.log(`MongoDB Database conected with HOST: ${con.connection.host}`)
    })
}

module.exports = conectDatabase