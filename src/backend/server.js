import { MongoClient } from 'mongodb'
import express from 'express'
import {addUser, updateUser} from './database.js'
const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";


const app = express();

app.use(express.json());


app.get('/', (req, res, next) => {

    res.sendStatus(200);
});


app.post('/usuario/adicionar', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();

    const user = req.body

    const email = await client.db().collection('usuario').findOne({email: email})

    if (email) {
        console.error(`Email ${email} já registrado.`);
        return true;
    }

    await addUser(user)

    res.sendStatus(200);
});


app.put('/usuario/atualizar', async (req, res, next) => {
    
    let novoEmail = ''
    
    const email = req.body.email
    updateUser(email, novoEmail)   

    res.sendStatus(200)
})


app.listen(3001, () => {
    console.log('Server running in http://127.0.0.1:3001')
});


   