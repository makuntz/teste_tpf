import { MongoClient } from 'mongodb';
import express from 'express'
import {addUser, updateUser} from './database.js'

const app = express();

app.use(express.json());


app.get('/', (req, res, next) => {

    res.sendStatus(200);
});


app.post('/usuario/adicionar', async (req, res, next) => {
    const user = req.body

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


   