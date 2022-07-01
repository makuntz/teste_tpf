import { MongoClient } from 'mongodb';
import express from 'express'
import {addUser, updateUser} from './database.js'

const app = express();

app.use(express.json());


app.get('/', (req, res, next) => {
    console.log('Hellowww');

    res.sendStatus(200);
});

app.post('/usuario/adicionar', async (req, res, next) => {
    const user = req.body

    await addUser(user)

    console.log('Holla muchacho');
    res.sendStatus(200);
});

app.put('usuario/atualizar', async (req, res, next) => {
    
    // let novoEmail = ''
    // if (!!req.body.update && req.body.update.email) {
    //     novoEmail = req.body.update.email;
    // }
    
   

    console.log(email)
    res.sendStatus(200)
})


app.listen(3001, () => {
    console.log('Server running in http://127.0.0.1:3001')
});


   